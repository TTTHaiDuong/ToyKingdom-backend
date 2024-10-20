import db from '../../models/index';

/**
 * Xoá sản phẩm hoặc xoá một loạt sản phẩm
 * @param {[Number] | Number} ids mã của sản phẩm hoặc danh sách của mã sản phẩm 
 * @param {function(Error?)} callback (error)
 * @returns {Promise<void> | void} 
 */
const deleteProduct = async (ids, callback) => {
    try {
        await db.Product.destroy({
            where: { id: ids }
        });

        if (callback) callback(null);
    }
    catch (err) {
        if (callback) callback(err);
        else throw err;
    }
}

export default {
    deleteProduct
}