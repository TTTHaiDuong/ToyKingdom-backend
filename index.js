import express from 'express';
import cors from 'cors';
import initWebRouters from './src/route/web.js';
import configViewEngine from './src/config/view-engine.js';
// import connectDB from './src/config/db-connection.js';
import 'dotenv/config.js';
import connectDB from './src/config/mongo-db-connection.js';
import seeder from './src/mongo-seeders/index.js';

// Khởi tạo ứng dụng bằng express
let app = express();

// // Option1: Development
// Cho phép bất kỳ nguồn nào truy cập đến server
app.use(cors({ origin: true }));

// // Option2: Production
// const allowedOrigins = [];
// app.use(cors({
//     origin: (origin, callback) => {
//         if (!origin || allowedOrigins.indexOf(origin) !== -1) { callback(null, true); }
//         else { callback(new Error('Origin is not allowed!')); }
//     }
// }))

// Middleware để phân tích request body
app.use(express.json()); // Middleware để xử lý json từ client
app.use(express.urlencoded({ extended: true })); // Cấu hình xử lý dữ liệu từ form HTML

// configViewEngine(app); // Cấu hình view engine
initWebRouters(app); // Khởi tạo router

connectDB();
// connectDB.testConnection(); // Test connection
//connectDB.startMySqlServer(); // Kiểm tra và khởi động MySQL server

seeder.update();

// Chạy server
app.listen(+process.env.PORT, () => {
    console.log('\x1b[1m\x1b[34m%s\x1b[0m', `Server is running on http://localhost:${process.env.PORT}`);
});