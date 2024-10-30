import db from '../models/index';
import customError from './custom-error';
import bcrypt from 'bcryptjs';

/**
 * Tạo mật khẩu mới cho người dùng
 * @param {Number} userId thông tin người dùng
 * @param {String} password mật khẩu chưa băm 
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<void> | void}
 */
const generate = async (userId, password, callback) => {
    try {
        if (!password || password === '') {
            const err = customError('EmptyPasswordError');
            if (callback) return callback(err);
            throw err;
        }

        // Băm mật khẩu
        const hashedPass = await bcrypt.hash(password, 10);

        // Cập nhật vào bản ghi
        const [updatedCount] = await db.User.update({
            password: hashedPass
        }, { where: { id: userId } });

        // Nếu không có bản ghi nào được cập nhật
        if (updatedCount == 0) {
            const err = customError('NoPasswordUpdatedError');
            if (callback) return callback(err);
            throw err;
        }

        if (callback) return callback(null);
    } catch (err) {
        if (callback) return callback(err);
        throw err;
    }
}

/**
 * Xác thực mật khẩu
 * @param {{id: Number?, email: String?, phone: String?}} userInfo thông tin người dùng
 * @param {String} password mật khẩu chưa băm
 * @param {function({id: Number, email: String, phone: String}?, Error?)?} callback (userInfo, error)
 * @returns {Promise<Boolean> | void}
 */
const verify = async (userId, password, callback) => {
    try {
        const user = await db.User.findByPk(userId);

        // Nếu người dùng không tồn tại
        if (!user) {
            const err = customError('UserNotFoundError');
            if (callback) return callback(null, err);
            throw err;
        }

        // Kiểm tra mật khẩu
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            // Mật khẩu đúng
            if (callback) return callback(true, null);
            return true;
        }
        else {
            // Mật khẩu sai
            if (callback) return callback(false, null);
            return false;
        }
    }
    catch (err) {
        if (callback) return callback(null, err);
        throw err;
    }
}

export default {
    generate,
    verify
}