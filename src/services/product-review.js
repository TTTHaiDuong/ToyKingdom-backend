import db from '../models/index';
import CustomError from './custom-error';

/**
 * Tạo một đánh giá sản phẩm
 * @param {Number} productId mã sản phẩm
 * @param {Number} rating điểm đánh giá (1->5)
 * @param {String} comment nhận xét
 * @param {function(ProductReview?, Error?)?} callback (review, error)
 * @return {Promise<ProductReview> | void}
 */
const upsert = async (productId, userId, rating, comment, callback) => {
    try {
        const review = await db.ProductReview.create({
            productId: productId,
            userId: userId,
            rating: rating,
            comment: comment,
            reviewDate: Date.now()
        }, { raw: true });

        if (callback) callback(null, review);
        else return review;
    }
    catch (err) {
        if (callback) callback(err, null);
        else throw err;
    }
}

const findOne = async () => {

}

/**
 * Lấy đánh giá sản phẩm
 * @param {{id: Number | [Number, Boolean], productId: Number | [Number, Boolean],
 * userId: Number | [Number, Boolean], rating: Number | [Number, Number],
 * comment: String | [String, Boolean], reviewDate: Date | [Date, Date],
 * createdAt: Date | [Date, Date], updatedAt: Date | [Date, Date], 
 * order: [[by: String, type: String]]}} conditions điều kiện để tìm đánh giá sản phẩm
 * 
 * @param {function([ProductReview]?, Error?)?} callback (reviews, error)
 * @return {Promise<[ProductReview]> | void} 
 */
const findAll = async (conditions, page = 1, limit = 10, callback) => {
    try {
        let { id, productId, userId, rating, comment, reviewDate, createdAt, updatedAt, order } = conditions;
        order = order || [['id', 'ASC']];

        const where = {
            ...(id && (Array.isArray(id) ? (id[1] === true ? { id: id }
                : { id: { [Op.like]: `%${id}%` } }) : { id: id })),

            ...(productId && (Array.isArray(productId) ? (productId[1] === true ? { productId: productId }
                : { productId: { [Op.like]: `%${productId}%` } }) : { productId: productId })),

            ...(userId && (Array.isArray(userId) ? (userId[1] === true ? { userId: userId }
                : { userId: { [Op.like]: `%${userId}%` } }) : { userId: userId })),

            ...(rating && (Array.isArray(rating) ? { rating: { [Op.between]: [rating[0], rating[1]] } }
                : { rating: rating })),

            ...(comment && (Array.isArray(comment) ? (comment[1] === true ? { comment: comment }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('comment'), comment), true)) : { comment: comment })),

            ...(reviewDate && (Array.isArray(reviewDate) ? { reviewDate: reviewDate }
                : { reviewDate: { [Op.between]: [reviewDate[0], reviewDate[1]] } })),

            ...(createdAt && (Array.isArray(createdAt) ? { createdAt: createdAt }
                : { createdAt: { [Op.between]: [createdAt[0], createdAt[1]] } })),

            ...(updatedAt && (Array.isArray(updatedAt) ? { updatedAt: updatedAt }
                : { updatedAt: { [Op.between]: [updatedAt[0], updatedAt[1]] } })),
        };

        const reviews = await db.ProductReview.findAll({
            where: where,
            group: ['ProductReview.id'],
            order: order,
            limit: +limit,
            offset: (page - 1) * limit,
            raw: true
        });

        if (callback) callback(null, reviews);
        else return reviews;
    }
    catch (err) {
        if (callback) callback(err, null);
        else throw err;
    }
}

/**
 * Xoá một đánh giá sản phẩm
 * @param {Number} id mã đánh giá
 * @param {function(Error?)?} callback (error)
 * @return {Promise<void> | void}
 */
const destroy = async (id, callback) => {
    try {
        const [deleted] = await db.ProductReview.destroy({
            where: { id: id }
        });

        if (deleted == 0) {
            const err = new CustomError('NoReviewDeletedError');
            if (callback) callback(err);
            else throw err;
        }
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default {
    upsert,
    findOne,
    findAll,
    destroy
}