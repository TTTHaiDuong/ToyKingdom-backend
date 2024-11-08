const removeDiacritics = (text) => {
    return text
        .normalize('NFD') // Tách các dấu từ ký tự gốc
        .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các dấu
        .replace(/đ/g, 'd') // Chuyển đổi chữ đ
        .replace(/Đ/g, 'D');
}

export default removeDiacritics;
