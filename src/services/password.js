import bcrypt from 'bcryptjs';
import CustomError from './custom-error.js';
import { User } from '../models.js';
import 'dotenv/config';

const isValid = (password) => {
    return password && password != ''
}

/**
 * 
 * @param {Number} userId mã người dùng
 * @param {String} password mật khẩu
 * @param {function(Error?)?} callback 
 * @returns {Promise<void>}
 */
const generate = async (userId, password, callback, session) => {
    try {
        if (isValid(password)) {
            const err = new CustomError('EmptyPasswordError');
            if (callback) return callback(err);
            throw err;
        };

        // Băm mật khẩu
        const hashed = await bcrypt.hash(password, +process.env.SALT_LENGTH);
        // Cập nhật vào bản ghi
        const updated = await User.updateOne({ _id: userId }, { password: hashed }, { ...(session && { session }) });

        // Nếu không có bản ghi nào được cập nhật
        if (updated.modifiedCount === 0) {
            const err = new CustomError('NoPasswordUpdatedError');
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
        const user = await User.findById(userId);

        // Nếu người dùng không tồn tại
        if (!user) {
            const err = new CustomError('UserNotFoundError');
            if (callback) return callback(err, null);
            throw err;
        }

        // Kiểm tra mật khẩu
        const result = await bcrypt.compare(password, user.password);
        if (result) {
            // Mật khẩu đúng
            if (callback) return callback(null, true);
            return true;
        }
        else {
            // Mật khẩu sai
            if (callback) return callback(null, false);
            return false;
        }
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

export default {
    isValid,
    generate,
    verify
}