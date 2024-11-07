import { Sequelize } from 'sequelize';
import { exec } from 'child_process'
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_CONNECTION_DATABASE_NAME, 'frontend', 'toykingdom', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: process.env.MYSQL_PORT, // Cổng MySQL mặc định, thay đổi nếu khác
  dialectOptions: {
    connectTimeout: 60000, // Thời gian chờ kết nối
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  }
});

/**Thử kết nối đến cơ sở dữ liệu */
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully!');
  }
  catch (error) {
    console.error(`Unable to connect to the database: ${error}`);
  }
}

/**
 * Chạy MySQL server và mở XAMPP. Hệ thống không hỗ trợ tuỳ chọn cổng của MySQL server.
 * Thay vào đó điều chỉnh ở file cấu hình trong XAMPP.
 */
const startMySqlServer = () => {
  // Kiểm tra XAMPP có trong tasklist không
  exec('tasklist', (error, stout, stderr) => {

    // Nếu như XAMPP chưa có trong tasklist thì mở nó
    if (!stout.includes('xampp-control.exe')) {

      // Khởi động XAMPP
      exec(process.env.XAMPP_PATH, (error, stout, stderr) => {

        if (error) console.error(`XAMPP startup error: ${error}`);
      });
    }
    else {
      console.log('XAMPP is already running. Use Task Manager for checking');
    }
  });

  // Khởi động MySQL server
  exec(process.env.MYSQL_PATH, (error, stdout, stderr) => {
    if (error) {
      console.error(`MySQL startup error: ${error}`);
      return;
    }
    console.log(`MySQL is running on port: ${process.env.MYSQL_PORT}`);
  });
}

export default {
  testConnection: connectDB,
  startMySqlServer
}