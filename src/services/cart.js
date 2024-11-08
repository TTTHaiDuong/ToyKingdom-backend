import { Cart } from '../models.js';
import mongoose from 'mongoose';
import toQueryOperatorObject from './mongoose-query-operator-object.js.js'

const create = async (attributes, callback, session) => {
    try {
        let cart = new Cart(attributes);
        await cart.save({ ...(session && { session }) });
        cart = cart.toObject();
        delete cart.__v;

        if (callback) return callback(null, cart);
        return cart;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const find = async (userId, productId, callback) => {
    try {
        const carts = await Cart.find({ userId, productId });
        if (callback) return callback(null, carts);
        return carts;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findAll = async (criteria, order, page = 1, limit = 10, callback) => {
    try {
        const { _id, productId, userId, quantity } = criteria || {};

        const project = {
            _id: 1, productId: 1, userId: 1, quantity: 1, price: 1, total: 1
        };

        const carts = await Cart.aggregate([
            {
                $match: {
                    ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
                    ...(productId && { productId: Array.isArray(productId) ? { $regex: productId[0], $options: productId.length > 1 ? productId[1] : 'i' } : productId }),
                    ...(userId && { userId: Array.isArray(userId) ? { $regex: userId[0], $options: userId.length > 1 ? userId[1] : 'i' } : userId }),
                    ...(quantity && { quantity: Array.isArray(quantity) ? toQueryOperatorObject(quantity) : quantity }),
                }
            },
            {
                $addFields: {
                    productIdObject: { $convert: { input: '$productId', to: 'objectId', onError: null, onNull: null } }
                }
            },
            {
                $lookup: {
                    from: 'Product',
                    localField: 'productIdObject',
                    foreignField: '_id',
                    as: 'product'
                }
            },
            {
                $addFields: {
                    product: { $arrayElemAt: ['$product', 0] },
                    price: { $ifNull: [{ $arrayElemAt: ['$product.price', 0] }, 0] },
                    total: { $multiply: [{ $ifNull: [{ $arrayElemAt: ['$product.price', 0] }, 0] }, '$quantity'] }
                }
            }, { $project: project },
            { $sort: order || { _id: 1 } },
            { $skip: (page - 1) * limit },
            { $limit: +limit }
        ]);

        if (callback) return callback(null, carts);
        return carts;
    }
    catch (err) {
        if (callback) callback(err, null);
        throw err;
    }
}

const update = async (attributes, callback, session) => {
    try {
        const cart = await Cart.findOneAndUpdate(
            { _id: _id },
            { $set: attributes },
            { new: true, ...(session && { session }) }
        ).select('-__v -password');

        if (callback) return callback(null, cart);
        return cart;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const destroy = async (ids, userId, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);
        const result = await Cart.deleteMany({ _id: { $in: _ids }, ...(userId && { userId }) }, { ...(session && { session }) });
        if (callback) return callback(null, result);
        else return result;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

export default {
    create,
    find,
    findAll,
    update,
    destroy
}