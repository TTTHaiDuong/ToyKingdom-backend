import { ProductImage } from "../models.js";
import mongoose from 'mongoose';

const create = async (attributes, callback, session) => {
    try {
        let image = new ProductImage(attributes);
        await image.save({ session });
        image = image.toObject();
        delete image.__v;

        if (callback) return callback(null, image);
        return image;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const find = async (productId, order, callback) => {
    try {
        const images = await ProductImage.find({
            productId: productId,
            ...(order && { order: order })
        }).sort({ order: 1 });

        if (callback) return callback(null, images);
        return images;
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
            { new: true, session }
        ).select('-__v');

        if (callback) return callback(null, image);
        return image;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const destroy = async (ids, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);
        const result = await ProductImage.deleteMany({ _id: { $in: _ids } }, { session });
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
    update,
    destroy
}