import cartServices from '../mongo-services/cart.js';
import { Cart } from '../models.js';

const create = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { productId, quantity } = req.body;

    cartServices.upsert(null, { userId, productId, quantity }, (err, cart) => {
        console.error(err)
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ created: cart, message: 'Ok' })
    });
}

const findByUser = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { filter, order, page, limit } = req.query;

    const criteria = filter && JSON.parse(filter);

    cartServices.findAll({ userId: userId, ...(criteria && { productId: criteria.productId, quantity: criteria.quantity }) },
        order, null, page, limit, (err, carts) => {

            if (err) return res.status(500).json({ message: 'Server error' });
            return res.status(200).json({ carts: carts, message: 'Ok' });
        });
}

const findByAdmin = async (req, res) => {
    const { filter, order, page, limit } = req.query;

    const criteria = filter && JSON.parse(filter);

    cartServices.findAll(criteria, order, null, page, limit, (err, carts) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ carts: carts, message: 'Ok' });
    });
}

const update = async (req, res) => {
    const userId = req.tokenPayload._id;
    const { _id, productId, quantity } = req.body;

    try {
        const updated = await Cart.updateOne(
            { _id: _id, userId: userId },
            { productId, quantity }
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

    try {
        const ids = Array.isArray(_ids) ? _ids.map(id => new mongoose.Types.ObjectId(id)) : new mongoose.Types.ObjectId(_ids);
        const result = await Cart.deleteMany({ _id: { $in: ids }, userId: userId });

        return res.status(200).json({ result: result, message: 'Ok' });
    }
    catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
}

export default {
    create,
    findByUser,
    findByAdmin,
    update,
    destroy
}