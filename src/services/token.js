import db from '../models/index';
import jwt from 'jsonwebtoken';
import customError from './custom-error';
import 'dotenv/config';

/**
 * Tạo token và ghi lại token trong CSDL
 * 
 * @param {{id: Number, email: String, phone: String, role: String}} payload thân của token
 * @param {{accessToken: Boolean?, refreshToken: Boolean?}} option
 * tuỳ chọn tạo access token hoặc refresh token hoặc cả hai
 * @param {function({accessToken: String?, refreshToken: String?}, Error?)?} callback
 * (tokenPair, error)
 * @returns {Promise<{accessToken: String?, refreshToken: String?}> | void}
 */
const generateAndRecord = async (payload, option, callback) => {
    try {
        // Ràng buộc phần thân dữ liệu mà token tải theo
        const data = { id: payload.id, email: payload.email, phone: payload.phone, role: payload.role };

        if (!data.id || !data.role) {
            const err = customError('MissingVariableError');
            if (callback) return callback(null, err)
            throw err;
        }

        const { accessToken, refreshToken } = option;

        let tokens = {};
        // Tạo access token
        if (accessToken && accessToken === true) {
            tokens.accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_PRI_KEY,
                { expiresIn: process.env.ACCESSS_TOKEN_EXPIRES_IN });
        }
        // Tạo refresh token
        if (refreshToken && refreshToken === true) {
            tokens.refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_PRI_KEY,
                { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });
        }
        // Cập nhật bản ghi có userId bằng với payload.id, nếu không có thì tạo mới
        if (tokens.accessToken || tokens.refreshToken)
            await db.LoginToken.upsert({ userId: data.id, ...tokens });

        if (callback) return callback(tokens, null);
        return tokens;
    }
    catch (err) {
        if (callback) return callback(null, err);
        throw err;
    }
}

/**
 * Lấy access token bằng refresh token
 * @param {String} refreshToken refresh token
 * @param {function(String?, Error?)?} callback (accessToken, error)
 * @returns {Promise<String> | void}
 */
const getAccessToken = async (refreshToken, callback) => {
    try {
        const decode = await verify({ refreshToken: refreshToken });
        const { accessToken } = await generateAndRecord(decode, { accessToken: true });

        if (callback) return callback(accessToken, null);
        return accessToken;
    }
    catch (err) {
        if (callback) return callback(null, err);
        throw err;
    }
}

/**
 * Xác thực token. Có thể dùng để xác thực chỉ một loại token.
 * Còn nếu truyền cả hai loại thì kết quả là tính xác thực của cả hai.
 * @param {{accessToken: String?, refreshToken: String?}} tokenPair access token hoặc refresh token
 * @param {function({id: Number, email: String, phone: String}?, Error?)?} callback
 * @returns {Promise<{id: Number, email: String, phone: String}> | void}
 */
const verify = async (tokenPair, callback) => {
    try {
        const { accessToken, refreshToken } = tokenPair;
        if (!accessToken && !refreshToken) {
            const err = customError('NotProvidedAnyTokenError');
            if (callback) return callback(null, err);
            throw err;
        }

        // Lấy bản ghi chứa token từ database
        const tokenCount = await db.LoginToken.count({
            where: {
                ...(accessToken && { accessToken: accessToken }),
                ...(refreshToken && { refreshToken: refreshToken })
            }
        });

        // Nếu bản ghi chứa các token không tồn tại
        if (tokenCount === 0) {
            const err = customError('TokenNotFoundError');
            if (callback) return callback(null, err);
            throw err;
        }

        // Xác thực bằng jwt, xác thực token còn hạn sử dụng không
        const [accessDecode, refreshDecode] = await Promise.all([
            accessToken ? verifyJwt(accessToken, process.env.ACCESS_TOKEN_PRI_KEY) : null,
            refreshToken ? verifyJwt(refreshToken, process.env.REFRESH_TOKEN_PRI_KEY) : null
        ]);

        // Decode là thân của token, access token và refresh token có thân payload như nhau
        if (callback) return callback(accessDecode || refreshDecode, null);
        return accessDecode || refreshDecode;
    }
    catch (err) {
        if (callback) return callback(null, err);
        throw err;
    }
}

/**
 * @private Chuyển phương thức jwt.verify thành Promise
 * @param {String} token access token hoặc refresh token
 * @param {String} key private key của access token hoặc refresh token
 */
const verifyJwt = (token, key) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, decode) => {
            if (err) reject(err);
            else resolve(decode);
        });
    });
}

export default {
    generateAndRecord,
    getAccessToken,
    verify
}
