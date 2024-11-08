import { Product } from '../models.js';
import toQueryOperatorObject from './mongoose-query-operator-object.js.js'
import mongoose from 'mongoose';

const create = async (attributes, callback, session) => {
    try {
        let product = new Product(attributes);
        await product.save({ ...(session && { session }) });
        product = product.toObject();
        delete product.__v;

        if (callback) return callback(null, product);
        return product;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findOne = async (_id, exclude, callback) => {
    try {
        const product = (await findAll({ _id: _id }, null, exclude))[0];
        if (callback) return callback(null, product);
        return product;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findAll = async (criteria, order, exclude, page = 1, limit = 10, callback) => {
    try {
        const { keyword, _id, name, category, price, brand, suitableAge, tag, stock, isSale,
            discount, revenue, totalSold, rating, totalReviews } = criteria || {};

        const project = {
            _id: 1, name: 1, category: 1, price: 1, brand: 1, images: 1, description: 1,
            suitableAge: 1, tag: 1, stock: 1, isSale: 1, discount: 1, revenue: 1, totalSold: 1,
            rating: 1, totalReviews: 1, ...(keyword && { score: { $meta: 'textScore' } })
        };

        if (Array.isArray(exclude)) {
            for (const ex of exclude) if (project[ex] !== undefined) delete project[ex];
        }
        else { delete project[exclude]; }

        const products = await Product.aggregate([
            {
                $match: {
                    ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
                    ...(name && { name: Array.isArray(name) ? { $regex: name[0], $options: name.length > 1 ? name[1] : 'i' } : name }),
                    ...(category && { category: Array.isArray(category) ? { $regex: category[0], $options: category.length > 1 ? category[1] : 'i' } : category }),
                    ...(price && { price: Array.isArray(price) ? toQueryOperatorObject(price) : price }),
                    ...(brand && { brand: Array.isArray(brand) ? { $regex: brand[0], $options: brand.length > 1 ? brand[1] : 'i' } : brand }),
                    ...(suitableAge && { suitableAge: Array.isArray(suitableAge) ? toQueryOperatorObject(suitableAge) : suitableAge }),
                    ...(tag && { tag: Array.isArray(tag) ? { $regex: tag[0], $options: tag.length > 1 ? tag[1] : 'i' } : tag }),
                    ...(stock && { stock: Array.isArray(stock) ? toQueryOperatorObject(stock) : stock }),
                    ...(isSale !== undefined && { isSale: isSale }),
                    ...(discount && { 'discount.percentage': Array.isArray(discount) ? toQueryOperatorObject(discount) : discount }),

                    ...(keyword && {
                        $text: {
                            $search: keyword,
                            $caseSensitive: false,
                            $diacriticSensitive: false
                        }
                    })
                }
            },
            {
                $addFields: {
                    _idToString: { $toString: '$_id' }
                }
            },
            {
                $lookup: {
                    from: 'ProductImage',
                    localField: '_idToString',
                    foreignField: 'productId',
                    as: 'images'
                }
            },
            {
                $lookup: {
                    from: 'SoldProduct',
                    localField: '_idToString',
                    foreignField: 'productId',
                    as: 'soldData'
                }
            },
            {
                $lookup: {
                    from: 'ProductReview',
                    localField: '_idToString',
                    foreignField: 'productId',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    revenue: {
                        $sum: {
                            $map: {
                                input: '$soldData',
                                as: 'sold',
                                in: { $multiply: ['$$sold.price', '$$sold.quantity'] }
                            }
                        }
                    },
                    totalSold: { $sum: '$soldData.quantity' },
                    rating: { $avg: '$reviews.rating' },
                    totalReviews: { $size: { $ifNull: ['$reviews', []] } }
                }
            },
            {
                $match: {
                    ...(revenue && { revenue: Array.isArray(revenue) ? toQueryOperatorObject(revenue) : revenue }),
                    ...(totalSold && { totalSold: Array.isArray(totalSold) ? toQueryOperatorObject(totalSold) : totalSold }),
                    ...(rating && { rating: Array.isArray(rating) ? toQueryOperatorObject(rating) : rating }),
                    ...(totalReviews && { totalReviews: Array.isArray(totalReviews) ? toQueryOperatorObject(totalReviews) : totalReviews })
                }
            },
            { $project: project },
            { $sort: order || { _id: 1 } },
            { $skip: (page - 1) * limit },
            { $limit: +limit }
        ]);

        if (callback) return callback(null, products);
        return products;
    }
    catch (err) {
        console.error(err);
        if (callback) return callback(err, null);
        throw err;
    }
}

const update = async (_id, attributes, callback, session) => {
    try {
        const product = await Product.findOneAndUpdate(
            { _id: _id },
            { $set: attributes },
            { new: true, ...(session && { session }) }
        ).select('-__v');

        if (callback) return callback(null, product);
        return product;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const destroy = async (ids, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);
        const result = await Product.deleteMany({ _id: { $in: _ids } }, { ...(session && { session }) });
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
    findOne,
    findAll,
    update,
    destroy
}