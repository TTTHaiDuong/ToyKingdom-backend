import db from '../models/index';
import customError from './custom-error';
import 'dotenv/config';
import token from './token';
import passwordServices from './password';
import user from './user';

/**
 * Đăng nhập bằng email hoặc số điện thoại và mật khẩu
 * @param {{email: String?, phone: String?}} emailOrPhone email, số điện thoại của người dùng
 * @param {String} password mật khẩu
 * @param {function({accessToken: String, refreshToken: String}?, Error?)?} callback (tokenPair, error)
 * @return {Promise<{accessToken: String, refreshToken: String}> | void}
 */
const login = async ({ email, phone }, password, callback) => {
    try {
        // Tìm người dùng phù hợp với email hoặc số điện thoại trong CSDL
        const user = await db.User.findOne({
            where: {
                ...(email && { email: email }),
                ...(phone && { phone: phone })
            },
            raw: true
        });

        // Nếu như người dùng không tồn tại
        if (!user) {
            const err = customError('UserNotFoundError');
            if (callback) return callback(null, err);
            throw err;
        }

        // Kiểm tra mật khẩu
        const payload = { id: user.id, email: user.email, phone: user.phone, role: user.role };

        const result = await passwordServices.verify(payload.id, password);
        if (!result) {
            const err = customError('IncorrectPasswordError');
            if (callback) return callback(null, err);
            throw err;
        }

        // Tạo cặp token ghi vào CSDL
        const tokenPair = await token.generateAndRecord(payload, {
            accessToken: true, refreshToken: true
        });
        if (callback) return callback(tokenPair, null);
        return tokenPair;
    }
    catch (err) {
        if (callback) return callback(null, err);
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
        const deletedCount = await db.LoginToken.destroy({
            where: { userId: userId }
        });

        // Nếu login token chưa được thu hồi
        if (deletedCount === 0) {
            const err = customError('UnrevokedLoginTokenError');
            if (callback) return callback(null, err);
            throw err;
        }

        if (callback) return callback(null);
        return null;
    }
    catch (err) {
        if (callback) return callback(err);
        throw err;
    }
}

const signup = async (email, phone, fullName, password, callback) => {
    const transaction = await db.sequelize.transaction();
    try {
        const created = await user.upsert(null, { email, phone, fullName, role: 'user' });
        await passwordServices.generate(created.id, password);

        await transaction.commit();

        created.password = undefined;
        if (callback) return callback(created, null);
        return created;
    }
    catch (err) {
        await transaction.rollback();
        if (callback) return callback(null, err)
        throw err;
    }
}

const changePassword = async (userId, oldPassword, newPassword, callback) => {
    try {
        const verification = await password.verify(userId, oldPassword);

        if (!verification) {
            const err = customError('IncorrectPasswordError');
            if (callback) return callback(null, err);
            throw err;
        }

        await password.generate(userId, newPassword);
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