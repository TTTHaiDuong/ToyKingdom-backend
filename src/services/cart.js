import db from '../models/index.js';

const upsert = async (id, attributes, callback, transaction) => {
    try {
        const { userId, productId, price, quantity } = attributes;

        const data = {
            ...(userId && { userId: userId }),
            ...(productId && { productId: productId }),
            ...(price && { price: price }),
            ...(quantity && { quantity: quantity }),
        }

        if (id) {
            const [updatedCount] = await db.Cart.update(data, {
                where: { id: id },
                transaction: transaction
            });
            if (callback) return callback(null, updatedCount);
            return updatedCount;
        }
        else {
            const cart = await db.Product.create(data, {
                transaction: transaction
            });
            if (callback) return callback(null, cart);
            return cart;
        }
    }
    catch (err) {
        if (err) return callback(err, null);
        throw err;
    }
}

const findAll = async (conditions, page = 1, limit = 10, callback) => {
    try {
        const { id, productId, userId, quantity, price } = conditions;

        const where = {
            ...(id && (Array.isArray(id) ? (typeof id[1] === 'string' ? { id: { [Op[id[1]]]: id } }
                : { id: { [Op.between]: [id[0], id[1]] } }) : { id: id })),

            ...(productId && (Array.isArray(id) ? (typeof id[1] === 'string' ? { id: { [Op[id[1]]]: id } }
                : { id: { [Op.between]: [id[0], id[1]] } }) : { id: id })),

            ...(id && (Array.isArray(id) ? (typeof id[1] === 'string' ? { id: { [Op[id[1]]]: id } }
                : { id: { [Op.between]: [id[0], id[1]] } }) : { id: id })),

            ...(price && (Array.isArray(price) ? (typeof price[1] === 'string' ? { price: { [Op[price[1]]]: price[0] } }
                : { price: { [Op.between]: [price[0], price[1]] } }) : { price: price })),

            ...(price && (Array.isArray(price) ? (typeof price[1] === 'string' ? { price: { [Op[price[1]]]: price[0] } }
                : { price: { [Op.between]: [price[0], price[1]] } }) : { price: price })),


        }
    }
    catch (err) {
        if (callback) return callback(err, null);
        throw err;
    }
}