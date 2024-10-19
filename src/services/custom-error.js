/**
 * Tạo lỗi tuỳ chỉnh
 * @param {String} name tên của lỗi
 * @param {String?} message tin nhắn của lỗi
 */
const customError = (name, message) => {
    const error = new Error(message);
    error.name = name;
    return error;
}

export default customError;