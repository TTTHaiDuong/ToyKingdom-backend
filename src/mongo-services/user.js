import { User } from '../models.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * 
 * @param {Number} _id mã người dùng
 * @param {{email: String?, 
* phone: String?, fullName: String?, 
* role: String?, createdAt: Date?, 
* updatedAt: Date?}} attributes
* 
* @param {function(Error?)?} callback (error)  
*/
const upsert = async (_id, attributes, callback, session) => {
    try {
        let user;
        if (_id) {
            user = await User.findOneAndUpdate(
                { _id: _id }, { $set: attributes }, { new: true, session }
            ).select('-__v -password');
        }
        else {
            attributes.password = await bcrypt.hash(attributes.password, +process.env.SALT_LENGTH);
            user = new User(attributes);
            await user.save();

            user = user.toObject();
            delete attributes.password;
            delete user.password;
            delete user.__v;
        }
        if (callback) return callback(null, user);
        return user;
    }
    catch (err) {
        console.error(err);
        if (callback) return callback(err, null);
        throw err;
    }
}

const findOne = async (_id, exclude, callback) => {
    try {
        const user = (await findAll({ _id: _id }, null, exclude))[0];
        if (callback) return callback(null, user);
        return user;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findAll = async (criteria, order, exclude, page = 1, limit = 10, callback) => {
    try {
        const { keyword, _id, email, phone, fullName, role } = criteria || {};
        const query = User.find({
            ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
            ...(email && { email: Array.isArray(email) ? { $regex: email[0], $options: email.length > 1 ? email[1] : 'i' } : email }),
            ...(phone && { phone: Array.isArray(phone) ? { $regex: phone[0], $options: phone.length > 1 ? phone[1] : 'i' } : phone }),
            ...(fullName && { fullName: Array.isArray(fullName) ? { $regex: fullName[0], $options: fullName.length > 1 ? fullName[1] : 'i' } : fullName }),
            ...(role && { role: Array.isArray(role) ? { $regex: role[0], $options: role.length > 1 ? role[1] : 'i' } : role }),

            ...(keyword && {
                $text: {
                    $search: keyword,
                    $caseSensitive: false,
                    $diacriticSensitive: false
                }
            })
        })
            .sort(order || { _id: 1 })
            .skip((page - 1) * limit)
            .limit(+limit);

        if (Array.isArray(exclude) && exclude.length > 0) {
            query.select(`-${exclude.join(' -')}`);
        }
        else if (exclude) {
            query.select(`-${exclude}`);
        }
        query.select('-password -__v');

        const users = await query;
        if (callback) return callback(null, users);
        return users;
    }
    catch (err) {
        if (callback) callback(err, null);
        throw err;
    }
}

/**
 * Xoá người dùng hoặc xoá một loạt người dùng
 * @param {[Number] | Number} ids mã của người dùng hoặc danh sách của mã người dùng 
 * @param {function(Error?)} callback
 * @returns {Promise<void> | void} 
 */
const destroy = async (ids, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);
        const result = await User.deleteMany({ _id: { $in: _ids } }, { session });
        if (callback) return callback(null, result);
        else return result;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

export default {
    upsert,
    findOne,
    findAll,
    destroy
}