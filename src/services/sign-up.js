import { Op } from 'sequelize';
import db from '../models';
import customError from './custom-error';
import { generatePassword } from './password';

/**
 * Tạo người dùng mới
 * @param {String} email email của người dùng
 * @param {String} phone số điện thoại của người dùng
 * @param {String} fullName họ và tên của người dùng
 * @param {String} password mật khẩu chưa băm
 * @param {function({id: Number, email: String, phone: String}?, Error?)?} callback (userInfo, error) 
 */
const createNewUser = async (email, phone, fullName, password, callback) => {
    try {
        // Kiểm tra sự tồn tại của email và số điện thoại
        const existingUser = checkExistingUser(email, phone);
        if (existingUser) throw existingUser;

        const user = await db.User.create({
            email: email,
            phone: phone,
            fullName: fullName,
        });

        const userInfo = { id, email, phone } = user;
        generatePassword(userInfo, password);

        if (callback) callback(userInfo, null);
        else return userInfo;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Kiểm tra email hoặc số điện thoại đã đăng ký hay chưa
 * @param {String} email email của người dùng
 * @param {String} phone số điện thoại của người dùng
 * @param {function(Error?)?} callback (error)
 * @returns {Promise<Error?> | void}
 */
const checkExistingUser = async (email, phone, callback) => {
    try {
        const user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { phone: phone }
                ]
            }
        });

        // Nếu email và số điện thoại đã được đăng ký
        if (user.email === email && user.phone === phone) {
            const err = customError('EmailAndPhoneAlreadyRegisteredError');
            if (callback) { callback(err); return; } else return err;
        }

        // Nếu email đã được đăng ký
        else if (user.email === email) {
            const err = customError('EmailAlreadyRegisteredError')
            if (callback) { callback(err); return; } else return err;
        }

        // Nếu số điện thoại đã được đăng ký
        else if (user.phone === phone) {
            const err = customError('PhoneAlreadyRegisteredError');
            if (callback) { callback(err); return; } else return err;
        }

        // Email và số điện thoại hợp lệ
        else {
            if (callback) callback(null);
            else return null;
        }
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default createNewUser;