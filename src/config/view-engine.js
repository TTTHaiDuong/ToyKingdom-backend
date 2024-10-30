import express from 'express';

/**
 * Dùng để cấu hình view engine. 
 * @param {express} app: đối tượng ứng dụng, bắt đầu vòng đời ở ./src/server.js
 */
function configViewEngine(app) {

    // Sử dụng thư mục './src/public' chứa các tệp công khai.
    app.use(express.static('./src/public'));

    // Đặt Ejs làm view engine.
    app.set('view engine', 'ejs');

    // Đặt thư mục ./src/views làm đường dẫn của view.
    // Để khi render các file view thì không cần phải viết đầy đủ đường dẫn, vd:
    // res.render('./src/views/homePage.ejs'); viết gọn lại là res.render('homePage.ejs');
    app.set('views', './src/views');
}

export default configViewEngine;