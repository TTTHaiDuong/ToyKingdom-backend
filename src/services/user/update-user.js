import db from '../../models/index';
import customError from '../custom-error';
import validator from 'validator';

/**
 * 
 * @param {Number} id mã người dùng
 * @param {{email: String?, 
 * phone: String?, fullName: String?, 
 * role: String?, createdAt: Date?, 
 * updatedAt: Date?}} changes
 * 
 * @param {function(Error?)?} callback (error)  
 */
const updateUser = async (id, changes, callback) => {
    try {
        const { email, phone, fullName, role, createdAt, updatedAt } = changes;

        if (email && !validator.isEmail(email)) {
            const err = customError('InvalidEmailFormatError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        if (phone && !validator.isMobilePhone(phone, 'any')) {
            const err = customError('InvalidPhoneNumberFormatError');
            if (callback) { callback(err); return; }
            else throw err;
        }

        let updateData = {};

        email && (updateData.email = email);
        phone && (updateData.phone = phone);
        fullName && (updateData.fullName = fullName);
        role && (updateData.role = role);
        createdAt && (updateData.createdAt = createdAt);
        updatedAt && (updateData.updatedAt = updatedAt);

        const [updatedCount] = await db.User.update(updateData, { where: { id: id } });

        if (updatedCount == 0) {
            const err = customError('NoUserUpdatedError');
            if (callback) { callback(err); return; }
            else throw err;
        }
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default updateUser;
