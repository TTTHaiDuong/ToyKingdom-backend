import { Product, SoldProduct } from '../models.js';
import toQueryObject from './array-to-query-object.js'
import removeDiacritics from './no-diacritics-text.js';

const upsert = async (id, attributes, callback, session) => {
    try {

    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const findOne = async (id, exclude, callback) => {
    try {

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
        const { _id, name, categories, price, brand, suitableAge, tag, stock, isSale,
            discount, revenue, totalSold, rating, totalReviews } = criteria || {};

        console.log(await SoldProduct.find());

        const products = await Product.aggregate([
            {
                $lookup: {
                    from: 'SoldProducts',
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'soldData'
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
                    }
                }
            },
            {
                $lookup: {
                    from: 'ProductReviews',
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'reviews'
                }
            },
            // {
            //     $group: {
            //         _id: '$_id',
            //         name: { $first: '$name' },
            //         categories: { $first: '$categories' },
            //         discount: { $first: '$discount' },
            //         price: { $first: '$price' },
            //         stock: { $first: '$stock' },
            //         isSale: { $first: '$isSale' },
            //         images: { $first: '$images' },
            //         description: { $first: '$description' },
            //         brand: { $first: '$brand' },
            //         suitableAge: { $first: '$suitableAge' },
            //         tag: { $first: '$tag' },
            //     }
            // },
            {
                $match: {
                    ...(_id && { _id: Array.isArray(_id) ? { $regex: _id[0], $options: _id.length > 1 && _id[1] } : _id }),
                    ...(name && { name: Array.isArray(name) ? { $regex: name[0], $options: name[1] } : name }),
                    ...(categories && { categories: { $in: categories } }),
                    ...(price && { price: Array.isArray(price) ? toQueryObject(price) : price }),
                    ...(brand && { brand: Array.isArray(brand) ? { $regex: brand[0], $options: name[1] } : name }),
                    ...(suitableAge && { suitableAge: Array.isArray(suitableAge) ? toQueryObject(suitableAge) : suitableAge }),
                    ...(tag && { tag: Array.isArray(tag) ? { $regex: tag[0], $options: tag[1] } : tag }),
                    ...(stock && { stock: Array.isArray(stock) ? toQueryObject(stock) : stock }),
                    ...(isSale !== undefined && { isSale: isSale }),
                    ...(discount && { 'discount.percentage': Array.isArray(discount) ? toQueryObject(discount) : discount }),

                    ...(revenue && { revenue: Array.isArray(revenue) ? toQueryObject(revenue) : revenue }),
                    ...(totalSold && { totalSold: Array.isArray(totalSold) ? toQueryObject(totalSold) : totalSold }),
                    ...(rating && { rating: Array.isArray(rating) ? toQueryObject(rating) : rating }),
                    ...(totalReviews && { totalReviews: Array.isArray(totalReviews) ? toQueryObject(totalReviews) : totalReviews }),
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    categories: 1,
                    price: 1,
                    brand: 1,
                    images: 1,
                    suitableAge: 1,
                    tag: 1,
                    stock: 1,
                    isSale: 1,
                    discount: 1,

                    revenue: 1,
                    totalSold: 1,
                    rating: 1,
                    totalReviews: 1,
                    soldData: 1
                }
            },
            {
                $sort: { _id: 1 }
            },
            {
                $limit: +limit
            }
        ]);

        if (callback) return callback(null, products);
        return products;
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}

const destroy = async (ids, callback, session) => {
    try {
        const result = await Product.deleteMany({ _id: { $in: ids } });
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