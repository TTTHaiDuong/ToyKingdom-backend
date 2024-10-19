import { Sequelize, Op, where } from 'sequelize';
import db from '../../models/index';

// Search box: id, email, phone, fullName
// Combo box: role
// Slide bar: createdAt, updatedAt

/**
 * Lấy danh sách người dùng (phân trang)
 * @param {Number} page số trang 
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([]?, Error?)?} callback (userInfosList, error)
 */
const getUsers = async (page = 1, limit = 10, callback) => {
    try {
        // Tìm các người dùng
        const userInfosList = await db.User.findAll({
            limit: limit,
            // Số bản ghi bỏ qua
            offset: (page - 1) * limit,
            // Loại bỏ password
            attributes: { exclude: ['password'] },
            // Kiểu đơn giản
            raw: true,
            // Sắp xếp theo id thứ tự tăng dần
            order: [['id', 'ASC']]
        });

        if (callback) callback(userInfosList, null);
        else return userInfosList;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Tìm người dùng
 * @param {{id: Number?, email: String?, phone: String?,
 * fullName: String?, role: String?, createdAt: {from: Date, to: Date}?, 
 * updatedAt: {from: Date, to: Date}?, order: [{by: String, isAsc: Boolean}]?}} conditions điều kiện tìm
 * @param {Number} page số trang
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([]?, Error?)?} callback (userInfosList, error)
* @returns {Promise<[]> | void}
 */
const findUsers = async (conditions, page = 1, limit = 10, callback) => {
    try {
        const { id, email, phone, fullName, role, createdAt, updatedAt, order } = conditions;
        const orders = order && Array.isArray(order)
            ? order.map(({ by, isAsc }) => [by, (isAsc ? 'ASC' : 'DESC')])
            : [['id', 'ASC']];

        const where = {
            // Nếu id có giá trị thì thêm đối tượng { id: {...} } vào trong where.
            // Nếu không thì biểu thức (id && { id: {...} }) trả về falsy, ... để không thêm gì vào where.
            ...(id && { id: { [Op.like]: `%${id}%` } }),
            ...(email && Sequelize.where(Sequelize.fn('search_string', Sequelize.col('email'), email), true)),
            ...(phone && { phone: { [Op.like]: `%${phone}%` } }),
            ...(fullName && Sequelize.where(Sequelize.fn('search_string', Sequelize.col('fullName'), fullName), true)),
            ...(role && { role: { [Op.like]: `%${role}%` } }),
            ...(createdAt && { createdAt: { [Op.between]: [createdAt.from, createdAt.to] } }),
            ...(updatedAt && { updatedAt: { [Op.between]: [updatedAt.from, updatedAt.to] } })
        };

        const userInfosList = await db.User.findAll({
            where: where,
            attributes: { exclude: ['password'] }, // Không trả về password
            limit: limit,
            offset: (page - 1) * limit, // Số bản ghi bỏ qua
            raw: true,
            order: orders // Sắp xếp theo id thứ tự tăng dần
        });

        if (callback) callback(userInfosList, null);
        else return userInfosList;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Lấy thông tin của một người dùng
 * @param {Number} id mã của người dùng
 * @param {function(Users?, Error?)} callback (users, error)
 * @returns {Promise<Users> | void}
 */
const getOneUser = async (id, exclude, callback) => {
    try {
        const user = await db.User.findByPk(id, {
            // Không trả về password
            attributes: { exclude: ['password', ...exclude] }
        });

        if (callback) callback(user, null);
        else return user;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

export default {
    getUsers,
    findUsers,
    getOneUser
}