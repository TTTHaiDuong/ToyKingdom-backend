import { Cart } from '../models.js';
import mongoose from 'mongoose';
import toQueryObject from './array-to-query-object.js';

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
        let cart;
        if (_id) {
            cart = await Cart.findOneAndUpdate(
                { _id: _id }, { $set: attributes }, { new: true, session }
            );
        }
        else {
            cart = new Cart(attributes);
            await cart.save();
        }
        if (callback) return callback(null, cart);
        return cart;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findAll = async (criteria, order, exclude, page = 1, limit = 10, callback) => {
    try {
        const { _id, productId, userId, quantity } = criteria || {};
        const query = Cart.find({
            ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
            ...(productId && { productId: Array.isArray(productId) ? { $regex: productId[0], $options: productId.length > 1 ? productId[1] : 'i' } : productId }),
            ...(userId && { userId: Array.isArray(userId) ? { $regex: userId[0], $options: userId.length > 1 ? userId[1] : 'i' } : userId }),
            ...(quantity && { quantity: Array.isArray(quantity) ? toQueryObject(quantity) : quantity }),
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

        const carts = await query;
        if (callback) return callback(null, carts);
        return carts;
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
        const result = await Cart.deleteMany({ _id: { $in: _ids } }, { session });
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
    findAll,
    destroy
}