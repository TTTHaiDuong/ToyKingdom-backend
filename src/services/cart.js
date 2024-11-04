import db from '../models/index.js';

const add = async (userId, productId, quantity, price, callback) => {
    const transaction = await db.sequelize.transaction();
    try {
        await db.Cart.create({
            userId: userId,
            productId: productId,
            quantity: quantity,
            price: price,
        }, { transaction: transaction });
    }
    catch (err) {

    }
}