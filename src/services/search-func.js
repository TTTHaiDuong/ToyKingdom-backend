/**
 * Xoá các dấu thanh của tiếng Việt
 * @param {String} str chuỗi vào
 */
const removeVietnameseAccents = (str) => {
    const accents = 'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ';
    const noAccents = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeeiiiiooooooooooooooooouuuuuuuuuuuyyyyy';

    return str.split('').map((char) => {
        const index = accents.indexOf(char);
        return index !== -1 ? noAccents[index] : char;
    }).join('');
}

/**
 * Chuẩn hoá chuỗi: trim, toLowerCase, removeVietnameseAccents
 * @param {String} str chuỗi vào
 */
const normalizeString = (str) => {
    return removeVietnameseAccents(str.trim().toLowerCase());
}

export default {
    removeVietnameseAccents,
    normalizeString
}