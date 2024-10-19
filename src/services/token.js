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
const generateTokenAndRecord = async (payload, option, callback) => {
    try {
        const { accessToken, refreshToken } = option;

        let tokens = {};
        // Tạo access token
        if (accessToken && accessToken === true) {
            tokens.accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRI_KEY,
                { expiresIn: process.env.ACCESSS_TOKEN_EXPIRES_IN });
        }
        // Tạo refresh token
        if (refreshToken && refreshToken === true) {
            tokens.refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_PRI_KEY,
                { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });
        }
        // Cập nhật bản ghi có userId bằng với payload.id, nếu không có thì tạo mới
        if (tokens.accessToken || tokens.refreshToken) {
            await db.LoginToken.upsert(
                {
                    userId: payload.id,
                    ...tokens
                });
        }

        if (callback) callback(tokens, null);
        else return tokens;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
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
        const decode = await verifyToken({ refreshToken: refreshToken });
        const { accessToken } = await generateTokenAndRecord(decode, { accessToken: true });
        if (callback) callback(accessToken, null);
        else return accessToken;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * Xác thực token. Có thể dùng để xác thực chỉ một loại token.
 * Còn nếu truyền cả hai loại thì kết quả là tính xác thực của cả hai.
 * @param {{accessToken: String?, refreshToken: String?}} tokenPair access token hoặc refresh token
 * @param {function({id: Number, email: String, phone: String}?, Error?)?} callback
 * @returns {Promise<{id: Number, email: String, phone: String}> | void}
 */
const verifyToken = async (tokenPair, callback) => {
    try {
        const { accessToken, refreshToken } = tokenPair;
        if (!accessToken && !refreshToken) {
            const err = customError('NotProvidedAnyTokenError');
            if (callback) { callback(null, err); return; }
            else throw err;
        }

        // Lấy bản ghi chứa token từ database
        const loginToken = await db.LoginToken.findOne({
            where: {
                ...(accessToken && { accessToken: accessToken }),
                ...(refreshToken && { refreshToken: refreshToken })
            },
            raw: true
        });

        // Nếu bản ghi chứa các token không tồn tại
        if (!loginToken) {
            const err = customError('TokenNotFoundError');
            if (callback) { callback(null, err); return; }
            else throw err;
        }

        // Xác thực bằng jwt, xác thực token còn hạn sử dụng không
        const [accessDecode, refreshDecode] = await Promise.all([
            accessToken ? verifyJwtToken(accessToken, process.env.ACCESS_TOKEN_PRI_KEY) : null,
            refreshToken ? verifyJwtToken(refreshToken, process.env.REFRESH_TOKEN_PRI_KEY) : null
        ]);

        // Decode là thân của token, access token và refresh token có thân payload như nhau
        if (callback) callback(accessDecode || refreshDecode, null);
        else return accessDecode || refreshDecode;
    }
    catch (err) {
        if (callback) callback(null, err);
        else throw err;
    }
}

/**
 * @private Chuyển phương thức jwt.verify thành Promise
 * @param {String} token access token hoặc refresh token
 * @param {String} key private key của access token hoặc refresh token
 */
const verifyJwtToken = (token, key) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, decode) => {
            if (err) reject(err);
            else resolve(decode);
        });
    });
}

export default {
    generateTokenAndRecord,
    getAccessToken,
    verifyToken
}
