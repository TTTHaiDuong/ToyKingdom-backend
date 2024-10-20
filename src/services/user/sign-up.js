import { Op } from 'sequelize';
import db from '../../models';
import customError from '../custom-error';
import { generatePassword } from '../password';
import validator from 'validator';

/**
 * Tạo người dùng mới
 * @param {String} email email của người dùng
 * @param {String} phone số điện thoại của người dùng
 * @param {String} fullName họ và tên của người dùng
 * @param {String} password mật khẩu chưa băm
 * @param {function(Error?)?} callback (error) 
 */
const createUser = async (email, phone, fullName, password, role, callback) => {
    try {
        if (!validator.isEmail(email)) {
            const err = customError('InvalidEmailFormatError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        if (!validator.isMobilePhone(phone)) {
            const err = customError('InvalidPhoneNumberFormatError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        if (typeof password != 'string' || password.length == 0) {
            const err = customError('InvalidPasswordError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        // Kiểm tra sự tồn tại của email và số điện thoại
        const existingUser = checkExistingEmailOrPhone({ email, phone });
        if (existingUser) throw existingUser;

        const user = await db.User.create({
            email: email,
            phone: phone,
            fullName: fullName,
            role: role
        });

        generatePassword(user.id, password);

        if (callback) callback(null);
    }
    catch (err) {
        if (callback) callback(err);
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
const checkExistingEmailOrPhone = async ({ email, phone }, callback) => {
    try {
        const user = await db.User.findOne({
            where: {
                [Op.or]: [
                    ...(email && { email: email }),
                    ...(phone && { phone: phone })
                ]
            }
        });

        let err = null;

        if (user) {
            // Nếu email và số điện thoại đã được đăng ký
            if (user.email === email && user.phone === phone)
                err = customError('EmailAndPhoneAlreadyRegisteredError');

            // Nếu email đã được đăng ký
            else if (user.email === email)
                err = customError('EmailAlreadyRegisteredError')

            // Nếu số điện thoại đã được đăng ký
            else if (user.phone === phone)
                err = customError('PhoneAlreadyRegisteredError');

            if (callback) callback(err);
            else return err;
        }

        if (callback) callback(null);
        else return null;
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default createUser;