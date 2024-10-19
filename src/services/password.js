import db from '../models/index';
import customError from './custom-error';
import { verifyToken } from './token';
import bcrypt from 'bcryptjs';

/**
 * Tạo mật khẩu mới cho người dùng
 * @param {{id: Number?, email: String?, phone: String?}} userInfo thông tin người dùng
 * @param {String} password mật khẩu chưa băm 
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<void> | void}
 */
const generatePassword = async (userInfo, password, callback) => {
    try {
        // Băm mật khẩu
        const hashedPass = await bcrypt.hash(password, 10);

        // Cập nhật vào bản ghi
        const [updatedCount] = await db.User.update({
            password: hashedPass
        }, { where: userInfo });

        // Nếu không có bản ghi nào được cập nhật
        if (updatedCount == 0) {
            const err = customError('NoPasswordUpdatedError');
            if (callback) { callback(err); return }
            else throw err;
        }

        if (callback) callback(null);
    } catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

/**
 * Đổi mật khẩu
 * @param {String} accessToken access token
 * @param {String} oldPassword mật khẩu cũ
 * @param {String} newPassword mật khẩu mới
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<void> | void}
 */
const changePassword = async (accessToken, oldPassword, newPassword, callback) => {
    try {
        // Xác thực và giải mã accesss token để lấy thông tin người dùng
        const userInfo = await verifyToken({ accessToken: accessToken });

        // Kiểm tra mật khẩu cũ
        const correctPassword = await verifyPassword(userInfo, oldPassword);
        if (!correctPassword) {
            const err = customError('IncorrectPasswordError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        // Tạo mật khẩu mới
        generatePassword(userInfo, newPassword);
        if (callback) callback(null);
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

/**
 * Xác thực mật khẩu
 * @param {{id: Number?, email: String?, phone: String?}} userInfo thông tin người dùng
 * @param {String} password mật khẩu chưa băm
 * @param {function({id: Number, email: String, phone: String}?, Error?)?} callback (userInfo, error)
 * @returns {Promise<Boolean> | void}
 */
const verifyPassword = async (userInfo, password, callback) => {
    try {
        const user = await db.User.findOne({
            where: userInfo
        });

        // Nếu người dùng không tồn tại
        if (!user) {
            const err = customError('UserNotFoundError');
            if (callback) { callback(null, err); return; }
            else throw err;
        }

        // Kiểm tra mật khẩu
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            // Mật khẩu đúng
            if (callback) { callback(true, null); }
            else return true;
        }
        else {
            // Mật khẩu sai
            if (callback) callback(false, null);
            else return false;
        }
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

export default {
    generatePassword,
    changePassword,
    verifyPassword
}