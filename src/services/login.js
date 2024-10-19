import db from '../models/index';
import customError from './custom-error';
import 'dotenv/config';
import tokenServices from './token';
import passwordServices from './password';

/**
 * Đăng nhập bằng email hoặc số điện thoại và mật khẩu
 * @param {{email: String?, phone: String?}} emailOrPhone email, số điện thoại của người dùng
 * @param {String} password mật khẩu
 * @param {function({accessToken: String, refreshToken: String}?, Error?)?} callback (tokenPair, error)
 * @return {Promise<{accessToken: String, refreshToken: String}> | void}
 */
const handlePasswordLogin = async (emailOrPhone, password, callback) => {
    try {
        // Tìm người dùng phù hợp với email hoặc số điện thoại trong CSDL
        const user = await db.User.findOne({
            where: {
                ...(emailOrPhone.email && { email: emailOrPhone.email }),
                ...(emailOrPhone.phone && { phone: emailOrPhone.phone })
            },
            raw: true
        });

        // Nếu như người dùng không tồn tại
        if (!user) {
            const err = customError('UserNotFoundError');
            if (callback) { callback(null, err); return }
            else throw err;
        }

        // Kiểm tra mật khẩu
        const { id, email, phone, role } = user;

        const result = await passwordServices.verifyPassword({ id, email, phone }, password);
        if (!result) {
            const err = customError('IncorrectPasswordError');
            if (callback) { callback(null, err); return; }
            else throw err;
        }

        // Tạo cặp token ghi vào CSDL
        const tokenPair = await tokenServices.generateTokenAndRecord({ id, email, phone, role }, {
            accessToken: true, refreshToken: true
        });
        if (callback) callback(tokenPair, null);
        else return tokenPair;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Đăng xuất
 * @param {String} accessToken access token
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<Error?> | void}
 */
const logout = async (accessToken, callback) => {
    try {
        // Xoá bản ghi chứa access token hoặc refresh token
        const deletedCount = await db.LoginToken.destroy({
            where: { accessToken: accessToken }
        });

        // Nếu login token chưa được thu hồi
        if (deletedCount == 0) {
            const err = customError('UnrevokedLoginTokenError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        if (callback) callback(null);
        else return null;
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default {
    handlePasswordLogin,
    logout
}