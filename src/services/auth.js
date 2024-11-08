import CustomError from './custom-error.js';
import 'dotenv/config';
import passwordSv from './password.js';
import tokenSv from './token.js';
import userSv from './user.js';
import { Token, User } from '../models.js';

const login = async (emailOrPhone, password, callback) => {
    try {
        const { email, phone } = emailOrPhone;

        // Tìm người dùng phù hợp với email hoặc số điện thoại trong CSDL
        const user = await User.findOne({
            ...(email && { email }),
            ...(phone && { phone })
        });

        // Nếu như người dùng không tồn tại
        if (!user) {
            const err = new CustomError('UserNotFoundError');
            if (callback) return callback(err, null);
            throw err;
        }

        // Kiểm tra mật khẩu
        const payload = { _id: user._id.toString(), role: user.role };

        const result = await passwordSv.verify(payload._id, password);
        if (!result) {
            const err = new CustomError('IncorrectPasswordError');
            if (callback) return callback(err, null);
            throw err;
        }

        // Tạo cặp token ghi vào CSDL
        const tokenPair = await tokenSv.generateAndRecord(payload, {
            accessToken: true, refreshToken: true
        });

        if (callback) return callback(null, tokenPair);
        return tokenPair;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

/**
 * Đăng xuất
 * @param {String} accessToken access token
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<Error?> | void}
 */
const logout = async (userId, callback) => {
    try {
        // Xoá bản ghi chứa access token hoặc refresh token
        const deleted = await Token.deleteOne({
            userId: userId
        });

        // Nếu login token chưa được thu hồi
        if (deleted === 0) {
            const err = new CustomError('UnrevokedLoginTokenError',
                ['paramInfo', { variable: 'userId' }]);
            if (callback) return callback(err);
            throw err;
        }

        if (callback) return callback(null);
    }
    catch (err) {
        if (callback) return callback(err);
        throw err;
    }
}

const signup = async (email, phone, fullName, password, callback) => {
    try {
        const user = await userSv.create({ email, phone, password, fullName, role: 'user' });
        if (callback) return callback(null, user);
        return user;
    }
    catch (err) {
        if (callback) return callback(err, null)
        throw err;
    }
}

const changePassword = async (userId, oldPassword, newPassword, callback) => {
    try {
        const verification = await passwordSv.verify(userId, oldPassword);

        if (!verification) {
            const err = new CustomError('IncorrectPasswordError');
            if (callback) return callback(err);
            throw err;
        }

        await passwordSv.generate(userId, newPassword);
        if (callback) return callback(null);
    }
    catch (err) {
        if (callback) return callback(err);
        throw err;
    }
}

export default {
    login,
    logout,
    signup,
    changePassword
}