import { ProductReview } from "../models.js";
import toQueryOperatorObject from "./mongoose-query-operator-object.js.js";
import mongoose from 'mongoose';

const create = async (attributes, callback, session) => {
    try {
        let review = new ProductReview(attributes);
        await review.save({ ...(session && { session }) });
        review = review.toObject();
        delete review.__v;

        if (callback) return callback(null, review);
        return review;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findAll = async (attributes, order, page = 1, limit = 10, callback) => {
    try {
        const { keyword, _id, productId, userId, comment, rating, } = attributes;

        const reviews = await ProductReview.find({
            ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
            ...(productId && { productId: Array.isArray(productId) ? { $regex: productId[0], $options: productId.length > 1 ? productId[1] : 'i' } : productId }),
            ...(userId && { userId: Array.isArray(userId) ? { $regex: userId[0], $options: userId.length > 1 ? userId[1] : 'i' } : userId }),
            ...(comment && { comment: Array.isArray(comment) ? { $regex: comment[0], $options: comment.length > 1 ? comment[1] : 'i' } : comment }),
            ...(rating && { rating: Array.isArray(rating) ? toQueryOperatorObject(rating) : rating }),

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

        if (callback) return callback(null, reviews);
        return reviews;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const update = async (_id, attributes, callback, session) => {
    try {
        const image = await ProductImage.findOneAndUpdate(
            { _id: _id },
            { $set: attributes },
            { new: true, ...(session && { session }) }
        ).select('-__v');

        if (callback) return callback(null, image);
        return image;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const destroy = async (ids, userId, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);

        const result = await ProductImage.deleteMany({
            _id: { $in: _ids },
            ...(userId && { userId })
        }, {
            ...(session && { session })
        });

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
    findAll,
    update,
    destroy
}