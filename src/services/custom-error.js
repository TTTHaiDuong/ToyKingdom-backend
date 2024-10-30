/**
 * Tạo lỗi tuỳ chỉnh
 * @param {String} name tên của lỗi
 * @param {String?} message tin nhắn của lỗi
 */
const customError = (name, message) => {
    const error = new CustomError(message);
    error.name = name;
    return error;
}

class CustomError extends Error {
    constructor(message) {
        super(message)
    }
}

export default customError;