import productServices from '../services/product.js';

const create = async (req, res) => {
    const { attributes } = req.body;

    productServices.create(attributes, (err, product) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ created: product });
    });
}

const findOne = async (req, res) => {
    const { _id } = req.query;
    const { role } = req.tokenPayload || { role: 'any' };

    const exclude = (role !== 'owner' && role !== 'admin') && 'revenue';

    productServices.findOne(_id, exclude, (err, product) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ product })
    });
}

const findAll = async (req, res) => {
    const { filter, order, page, limit } = req.query;
    const { role } = req.tokenPayload || { role: 'any' };

    const criteria = filter && JSON.parse(filter);

    const exclude = (role !== 'owner' && role !== 'admin') && 'revenue';

    productServices.findAll(criteria, order, exclude, page, limit, (err, products) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ products })
    });
}

const update = async (req, res) => {
    const { _id, attributes } = req.body;

    if (!_id) return res.status(400).json({ message: 'Missing _id' });

    productServices.update(_id, attributes, (err, updated) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

const destroy = async (req, res) => {
    const { _ids } = req.body;

    productServices.destroy(_ids, (err, result) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ result: result });
    });
}

export default {
    create: create,
    findAll: findAll,
    findOne: findOne,
    update: update,
    destroy: destroy
}
