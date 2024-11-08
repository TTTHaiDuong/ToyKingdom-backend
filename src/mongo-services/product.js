import { Product } from '../models.js';
import toQueryObject from './array-to-query-object.js'
import mongoose from 'mongoose';

const upsert = async (_id, attributes, callback, session) => {
    try {
        let product;
        if (_id) {
            product = await Product.updateOne(
                { _id: _id }, attributes, { session }
            );
        }
        else {
            product = await Product.create(attributes, { session });
        }
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

/**
 * eq, ne (not eq), gt, gte, lt, lte, exists, type, all, and, or, nor, not
 * @param {*} criteria 
 * @param {*} order 
 * @param {*} exclude 
 * @param {*} page 
 * @param {*} limit 
 * @param {*} callback 
 * @returns 
 */
const findAll = async (criteria, order, exclude, page = 1, limit = 10, callback) => {
    try {
        const { keyword, _id, name, category, price, brand, suitableAge, tag, stock, isSale,
            discount, revenue, totalSold, rating, totalReviews } = criteria || {};

        const project = {
            _id: 1, name: 1, category: 1, price: 1, brand: 1, images: 1,
            suitableAge: 1, tag: 1, stock: 1, isSale: 1, discount: 1, revenue: 1, totalSold: 1,
            rating: 1, totalReviews: 1, ...(keyword && { score: { $meta: "textScore" } })
        };

        if (Array.isArray(exclude)) {
            for (const ex of exclude) {
                if (project[ex] !== undefined) {
                    delete project[ex];
                }
            }
        }
        else { delete project[exclude]; }

        const products = await Product.aggregate([
            {
                $match: {
                    ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 ? _id[1] : 'i' } : new mongoose.Types.ObjectId(_id) }),
                    ...(name && { name: Array.isArray(name) ? { $regex: name[0], $options: name.length > 1 ? name[1] : 'i' } : name }),
                    ...(category && { category: { $in: category } }),
                    ...(price && { price: Array.isArray(price) ? toQueryObject(price) : price }),
                    ...(brand && { brand: Array.isArray(brand) ? { $regex: brand[0], $options: brand.length > 1 ? brand[1] : 'i' } : brand }),
                    ...(suitableAge && { suitableAge: Array.isArray(suitableAge) ? toQueryObject(suitableAge) : suitableAge }),
                    ...(tag && { tag: Array.isArray(tag) ? { $regex: tag[0], $options: tag.length > 1 ? tag[1] : 'i' } : tag }),
                    ...(stock && { stock: Array.isArray(stock) ? toQueryObject(stock) : stock }),
                    ...(isSale !== undefined && { isSale: isSale }),
                    ...(discount && { 'discount.percentage': Array.isArray(discount) ? toQueryObject(discount) : discount }),

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
                    _idToString: { $toString: "$_id" }
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
                                input: "$soldData",
                                as: "sold",
                                in: { $multiply: ["$$sold.price", "$$sold.quantity"] }
                            }
                        }
                    },
                    totalSold: { $sum: '$soldData.quantity' },
                    rating: { $avg: '$reviews.rating' },
                    totalReviews: { $size: { $ifNull: ["$reviews", []] } }
                }
            },
            {
                $match: {
                    ...(revenue && { revenue: Array.isArray(revenue) ? toQueryObject(revenue) : revenue }),
                    ...(totalSold && { totalSold: Array.isArray(totalSold) ? toQueryObject(totalSold) : totalSold }),
                    ...(rating && { rating: Array.isArray(rating) ? toQueryObject(rating) : rating }),
                    ...(totalReviews && { totalReviews: Array.isArray(totalReviews) ? toQueryObject(totalReviews) : totalReviews })
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

const destroy = async (ids, callback, session) => {
    try {
        const _ids = Array.isArray(ids) ? ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(ids);
        const result = await Product.deleteMany({ _id: { $in: _ids } }, { session });
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