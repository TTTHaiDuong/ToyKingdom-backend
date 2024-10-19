import productServices from '../services/product/get-product'

/**
 * Yêu cầu lấy thông tin của một sản phẩm
 * @param {{id: Number}}
 * @return {{}}
 */
const getOneProduct_Admin = async (req, res) => {
    const { productId } = req.query;

    if (productId) {
        productServices.getOneProduct(productId, null, (product, err) => {
            if (product) {
                console.log(JSON.stringify(product, null, 2));
                //return res.status(200).json({ user, message: 'Ok' });
            }
            else return res.status(500).json({ message: 'Server error' });
        });
    }
    else {
        return res.status(401).json({ message: 'Not provided productId' });
    }
}

export default {
    getOneProduct_Admin
}
