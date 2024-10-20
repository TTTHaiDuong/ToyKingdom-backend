import db from '../../models/index';

/**
 * Xoá người dùng hoặc xoá một loạt người dùng
 * @param {[Number] | Number} ids mã của người dùng hoặc danh sách của mã người dùng 
 * @param {function(Error?)} callback (error)
 * @returns {Promise<void> | void} 
 */
const deleteUser = async (ids, callback) => {
    try {
        await db.User.destroy({
            where: { id: ids }
        });

        if (callback) callback(null);
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default deleteUser;