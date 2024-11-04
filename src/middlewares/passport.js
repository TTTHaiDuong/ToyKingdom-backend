import tokenServices from '../services/token.js';

/** Danh sách quyền của các vai trò */
const userRoles = {
    admin: ['admin'],
    user: ['user'],
    owner: ['admin', 'owner'],
    registered: ['admin', 'user', 'owner', 'registered']
}

/**
 * Kiểm tra quyền tài khoản
 * @param {String} accessToken access token
 * @param {String} role vai trò của tài khoản
 * @param {function(Error)} callback (error) 
 */
const checkRole = (role) => async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];

    tokenServices.verify({ accessToken: accessToken }, (err, decode) => {
        if (err || !decode) return res.status(401).json({ message: 'Unauthorized' });

        if (!userRoles[role]?.includes(decode.role))
            return res.status(403).json({ message: 'Access denied' });

        req.tokenPayload = decode;
        next();
    });
}

export default {
    checkUser: checkRole('user'),
    checkAdmin: checkRole('admin'),
    checkOwner: checkRole('owner'),
    checkRegistered: checkRole('registered'),
    userRoles: userRoles
}
