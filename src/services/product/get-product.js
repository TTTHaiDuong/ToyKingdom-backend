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
 * @param {{id: Number | [Number, Boolean], name: String | [String, Boolean], 
 * price: Number | [Number, Number], stockQuantity: Number | [Number, Number], 
 * brand: String | [String, Boolean], suitableAge: Number | [Number, Number], 
 * tag: String | [String, Boolean], createdAt: Date | [Date, Date], 
 * updatedAt: Date | [Date, Date], discount: Number | [Number, Number], 
 * revenue: Number | [Number, Number], soldQuantity: Number | [Number, Number], 
 * categories: [String], rating: Number | [Number, Number], 
 * order: [{by: String, type: String}]?}} conditions điều kiện tìm
 * 
 * @param {Number} page số trang
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([Product]?, Error?)?} callback (products, error)
 * @returns {Promise<[Product]> | void}
 */
const findProducts = async (conditions, exclude, page = 1, limit = 10, callback) => {
    try {
        let { id, name, price, brand, suitableAge, tag, createdAt, rating,
            updatedAt, stockQuantity, discount, revenue, soldQuantity, categories, order } = conditions;

        // Sắp xếp các bản ghi theo thứ tự
        order = order || [['id', 'ASC']];


        const where = {
            ...(id && (Array.isArray(id) ? (id[1] === true ? { id: id }
                : { id: { [Op.like]: `%${id}%` } }) : { id: id })),

            ...(name && (Array.isArray(name) ? (name[1] === true ? { name: name }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('name'), name), true)) : { name: name })),

            ...(price && (Array.isArray(price) ? { price: { [Op.between]: [price[0], price[1]] } } : { price: price })),

            ...(brand && (Array.isArray(brand) ? (brand[1] === true ? { brand: brand }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('brand'), brand), true)) : { brand: brand })),

            ...(suitableAge && (Array.isArray(suitableAge) ? { suitableAge: { [Op.between]: [suitableAge[0], suitableAge[1]] } }
                : { suitableAge: suitableAge })),

            ...(tag && (Array.isArray(tag) ? (tag[1] === true ? { tag: tag }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('tag'), tag), true)) : { tag: tag })),

            ...(createdAt && (Array.isArray(createdAt) ? { createdAt: createdAt } : { createdAt: { [Op.between]: [createdAt[0], createdAt[1]] } })),
            ...(updatedAt && (Array.isArray(updatedAt) ? { updatedAt: updatedAt } : { updatedAt: { [Op.between]: [updatedAt[0], updatedAt[1]] } }))
        }

        const include = [
            {
                // Join với bảng InventoryProduct
                model: db.InventoryProduct,
                attributes: [[Sequelize.col('quantity'), 'stockQuantity'], 'forSale'],

                ...(stockQuantity && (Array.isArray(stockQuantity) ? { stockQuantity: { [Op.between]: [stockQuantity[0], stockQuantity[1]] } }
                    : { stockQuantity: stockQuantity })),
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
                    [Sequelize.fn('SUM', Sequelize.col('SoldProducts.quantity')), 'revenue']
                    // [Sequelize.fn('SUM', Sequelize.col('Product->SoldProducts.totalAmount')), 'revenue']
                ],
                exclude: exclude ? exclude : []
            },
            include: include,
            where: where,
            group: ['Product.id'],
            order: order,
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