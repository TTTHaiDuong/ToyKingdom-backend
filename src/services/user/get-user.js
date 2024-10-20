import { Sequelize, Op } from 'sequelize';
import db from '../../models/index';

/**
 * Tìm người dùng
 * @param {{id: Number | [Number, Boolean], email: String | [String, Boolean], 
 * phone: String ! [String, Boolean], fullName: String | [String, Boolean], 
 * role: String | [String | Boolean], createdAt: [Date, Date], 
 * updatedAt: [Date, Date], order: [{by: String, isAsc: Boolean}]?}} conditions 
 * điều kiện tìm (mặc định là tìm chính xác có thể sử dụng 'key: value' hoặc 'key: [value, true]'). 
 * Tìm gần đúng bằng cách sử dụng 'key :[value, false]'
 * 
 * @param {Number} page số trang
 * @param {Number} limit số lượng bản ghi tối đa trả về
 * @param {function([]?, Error?)?} callback (userInfosList, error)
* @returns {Promise<[]> | void}
 */
const findUser = async (conditions, page = 1, limit = 10, callback) => {
    try {
        let { id, email, phone, fullName, role, createdAt, updatedAt, order } = conditions;
        order = order || [['id', 'ASC']];

        const where = {
            ...(id && (Array.isArray(id) ? (id[1] === true ? { id: id }
                : { id: { [Op.like]: `%${id}%` } }) : { id: id })),

            ...(email && (Array.isArray(email) ? (email[1] === true ? { email: email }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('email'), email), true)) : { email: email })),

            ...(phone && (Array.isArray(phone) ? (phone[1] === true ? { phone: phone }
                : { phone: { [Op.like]: `%${phone}%` } }) : { phone: phone })),

            ...(fullName && (Array.isArray(fullName) ? (fullName[1] === true ? { fullName: fullName }
                : Sequelize.where(Sequelize.fn('search_string', Sequelize.col('fullName'), fullName), true)) : { fullName: fullName })),

            ...(role && (Array.isArray(role) ? (role[1] === true ? { role: role }
                : { role: { [Op.like]: `%${role}%` } }) : { role: role })),

            ...(createdAt && { createdAt: { [Op.between]: [createdAt.from, createdAt.to] } }),
            ...(updatedAt && { updatedAt: { [Op.between]: [updatedAt.from, updatedAt.to] } })
        };

        const users = await db.User.findAll({
            attributes: { exclude: ['password'] }, // Không trả về password
            where: where,
            order: order,
            limit: limit,
            offset: (page - 1) * limit,
            raw: true
        });

        if (callback) callback(users, null);
        else return users;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

export default findUser;