import tokenServices from '../services/token'

/**
 * Kiểm tra quyền người dùng thông thường
 */
const checkUser = async (req, res, next) => {
    const { accessToken } = req.query;
    verifyTokenAndRole(accessToken, 'user', (err) => {
        if (err) return res.status(401).json({ message: 'No permission' });
        else next();
    });
}

/**
 * Kiểm tra quyền quản trị viên
 */
const checkAdmin = async (req, res, next) => {
    const { accessToken } = req.query;
    verifyTokenAndRole(accessToken, 'admin', (err) => {
        if (err) return res.status(401).json({ message: 'No permission' });
        else next();
    });
}

/**
 * Kiểm tra quyền chủ sở hữu
 */
const checkOwner = async (req, res, next) => {
    const { accessToken } = req.query;
    verifyTokenAndRole(accessToken, 'owner', (err) => {
        if (err) return res.status(401).json({ message: 'No permission' });
        else next();
    });
}

/**
 * @private Kiểm tra quyền tài khoản
 * @param {String} accessToken access token
 * @param {String} role vai trò của tài khoản
 * @param {function(Error)} callback (error) 
 */
const verifyTokenAndRole = (accessToken, role, callback) => {
    tokenServices.verifyToken({ accessToken: accessToken }, (user, err) => {
        if (user && user.role && user.role == role) callback(null);
        else callback(err);
    });
}

export default {
    checkUser,
    checkAdmin,
    checkOwner
}
