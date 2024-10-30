import productServices from '../services/product';

const createProduct = async (req, res) => {
    const { attributes } = req.body;

    productServices.upsert(null, attributes, null, (product, err) => {

        console.error(err);
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ product: product, message: 'Ok' });
    });
}

const findOneProduct = async (req, res) => {
    const { id } = req.query;
    const { role } = req.tokenPayload || { role: 'any' };

    const exclude = (role !== 'owner' && role !== 'admin') && 'revenue';

    console.log(exclude)

    productServices.findOne(id, exclude, (product, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ product: product, message: 'Ok' })
    });
}

/**
 * Yêu cầu lấy thông tin của một sản phẩm
 * @param {{id: Number}}
 * @return {{}}
 */
const findAllProducts = async (req, res) => {
    const { filter, page, limit } = req.query;
    const { role } = req.tokenPayload || { role: 'any' };

    const conditions = filter && JSON.parse(filter);

    const exclude = (role !== 'owner' && role !== 'admin') && 'revenue';

    productServices.findAll(conditions, exclude, page, limit, (products, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ products: products, message: 'Ok' })
    });
}

const updateProduct = async (req, res) => {
    const { id, attributes } = req.body;

    if (!id) return res.status(400).json({ message: 'Missing id' });

    productServices.upsert(id, attributes, null, (count, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ updatedRows: count, message: 'Ok' });
    });
}

const deleteProducts = async (req, res) => {
    const { ids } = req.body;

    productServices.destroy(ids, (deleted, err) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        return res.status(200).json({ message: 'Ok' });
    });
}

export default {
    createProduct,
    findAllProducts,
    findOneProduct,
    updateProduct,
    deleteProducts
}
