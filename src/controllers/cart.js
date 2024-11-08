import cartSv from '../services/cart.js';
import { Cart } from '../models.js';

const create = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { productId, quantity } = req.body;

    cartSv.create({ userId, productId, quantity }, (err, cart) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ created: cart, message: 'Ok' })
    });
}

const findByUser = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { filter, order, page, limit } = req.query;

    const criteria = filter && JSON.parse(filter);

    cartSv.findAll({ userId: userId, ...(criteria && { productId: criteria.productId, quantity: criteria.quantity }) },
        order, page, limit, (err, carts) => {

            if (err) return res.status(500).json({ message: 'Server error' });
            return res.status(200).json({ carts: carts, message: 'Ok' });
        });
}

const findByAdmin = async (req, res) => {
    const { filter, order, page, limit } = req.query;

    const criteria = filter && JSON.parse(filter);

    cartSv.findAll(criteria, order, page, limit, (err, carts) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ carts: carts, message: 'Ok' });
    });
}

const update = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { _id, quantity } = req.body;

    try {
        const updated = await Cart.updateOne(
            { _id: _id, userId: userId },
            { quantity }
        );
        return res.status(200).json({ updated: updated, messsage: 'Ok' })
    }
    catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}

const destroy = async (req, res) => {
    const { _ids } = req.body;
    const userId = req.tokenPayload._id;

    cartSv.destroy(_ids, userId, (err, result) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ result: result, message: 'Ok' });
    });
}

export default {
    create,
    findByUser,
    findByAdmin,
    update,
    destroy
}