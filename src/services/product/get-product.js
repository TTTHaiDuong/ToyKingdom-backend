import db from '../../models/index';
import { Sequelize, Op } from 'sequelize';

/**
 * Lấy danh sách sản phẩm (phân trang)
 * @param {Number} page số trang 
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([]?, Error?)?} callback (productsList, error)
 */
const getProducts = async (page = 1, limit = 10, callback) => {
    try {
        // Tìm các sản phẩm
        const productsList = await db.Product.findAll({
            limit: limit,
            // Số bản ghi bỏ qua
            offset: (page - 1) * limit,
            // Kiểu đơn giản
            raw: true,
            // Sắp xếp theo id thứ tự tăng dần
            order: [['id', 'ASC']]
        });

        if (callback) callback(productsList, null);
        else return productsList;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Tìm sản phẩm
 * @param {{id: Number?, name: String?, price: {from: Number, to: Number}?, 
 * stockQuantity: {from: Number, to: Number}?, brand: String?, 
 * suitableAge: {from: Number, to: Number}?, tag: String?, 
 * createdAt: {from: Date, to: Date}?, updatedAt: {from: Date, from: Date}?, 
 * discount: {from: Number, to: Number}?, revenue: {from: Number, to: Number}?,
 * soldQuantity: {from: Number, to: Number}?, categories: [String]?,
 * rating: {from: Number, to: Number}?, order: [{by: String, isAsc: Boolean}]?}} conditions điều kiện tìm
 * 
 * @param {Number} page số trang
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([Product]?, Error?)?} callback (products, error)
* @returns {Promise<[Product]> | void}
 */
const findProducts = async (conditions, exclude, page = 1, limit = 10, callback) => {
    try {
        const { id, name, price, brand, suitableAge, tag, createdAt, rating,
            updatedAt, stockQuantity, discount, revenue, soldQuantity, categories, order } = conditions;

        // Sắp xếp các bản ghi theo thứ tự
        const orders = order && Array.isArray(order)
            ? order.map(({ by, isAsc }) => {
                const type = isAsc ? 'ASC' : 'DESC';

                switch (by) {
                    case 'totalSold': return [Sequelize.fn('SUM', Sequelize.col('SoldProduct.quantity')), type];
                    case 'discount': return ['Discount.percentage', type];
                    case 'totalAmount': return [Sequelize.fn('SUM', Sequelize.col('SoldProduct.totalAmount')), type];
                    case 'rating': return [Sequelize.fn('AVG', Sequelize.col('ProductReview.rating')), type]
                    default: return [by, type];
                }
            })
            : [['id', 'ASC']];


        const where = {
            ...(id && { id: { [Op.like]: `%${id}%` } }),
            //...(id && { id: id }),
            ...(name && Sequelize.where(Sequelize.fn('search_string', Sequelize.col('name'), name), true)),
            ...(price && { price: { [Op.between]: [price.from, price.to] } }),
            ...(brand && Sequelize.where(Sequelize.fn('search_string', Sequelize.col('brand'), brand), true)),
            ...(suitableAge && { suitableAge: { [Op.between]: [suitableAge.from, suitableAge.to] } }),
            ...(tag && Sequelize.where(Sequelize.fn('search_string', Sequelize.col('tag'), tag), true)),
            ...(createdAt && { createdAt: { [Op.between]: [createdAt.from, createdAt.to] } }),
            ...(updatedAt && { updatedAt: { [Op.between]: [updatedAt.from, updatedAt.to] } })
        }

        const include = [
            {
                // Join với bảng InventoryProduct
                model: db.InventoryProduct,
                attributes: [[Sequelize.col('quantity'), 'stockQuantity'], 'forSale'],
                ...(stockQuantity && { where: { quantity: { [Op.between]: [stockQuantity.from, stockQuantity.to] } } })
            },
            {
                // Join với bảng ProductReview
                model: db.ProductReview,
                attributes: [],
                require: false
            },
            {
                model: db.Category,
                attributes: [[Sequelize.col('id'), 'categoryId'], 'name'],
                require: false,
                ...(categories && { where: { name: { [Op.in]: categories } } })
            },
            {
                // Join với bảng Discount
                model: db.Discount,
                attributes: [[Sequelize.col('percentage'), 'saleOff'], 'startDate', 'endDate'],
                require: false,
                ...(discount && { where: { percentage: { [Op.between]: [discount.from, discount.to] } } })
            },
            {
                // Join với bảng SoldProduct
                model: db.SoldProduct,
                attributes: ['totalAmount', [Sequelize.fn('sum', Sequelize.col('totalAmount')), 'revenue']],
                require: false,
            },
            {
                // Join với bảng ProductImage
                model: db.ProductImage,
                attributes: ['url', 'order'],
                order: [['order', 'ASC']],
                require: false,
            }];

        const products = await db.Product.findAll({
            attributes: {
                include: [
                    //[Sequelize.fn('SUM', Sequelize.col('SoldProducts.quantity')), 'revenue']
                    // [Sequelize.fn('SUM', Sequelize.col('Product->SoldProducts.totalAmount')), 'revenue']
                ],
                exclude: exclude ? exclude : []
            },
            include: include,
            where: where,
            group: ['Product.id'],
            order: orders,
            limit: limit,
            offset: (page - 1) * limit,
        });

        console.log(JSON.stringify(products, null, 2));

        if (callback) callback(products, null);
        else return products;
    }
    catch (err) {
        console.error(err);
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Lấy thông tin của một sản phẩm
 * @param {Number} id mã của sản phẩm
 * @param {[String]} exclude các thuộc tính không trả về
 * @param {function(Product?, Error?)} callback (product, error)
 * @returns {Promise<Product> | void}
 */
const getOneProduct = async (id, exclude, callback) => {
    try {
        const product = (await findProducts({ id: id, revenue: { from: 0, to: 100000000 } }, exclude))[0];
        if (callback) callback(product, null);
        else return product;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

export default {
    getProducts,
    findProducts,
    getOneProduct
}