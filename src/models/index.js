import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const __dirname = path.dirname(__filename);
const env = process.env.ENVTYPE || 'development';

// Đọc tệp JSON theo cách thông thường
const configPath = path.join(__dirname, '../config/config.json');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const config = configData[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Đọc tất cả các tệp mô hình trong thư mục hiện tại
const modelFiles = fs.readdirSync(__dirname).filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );
});

// Sử dụng Promise.all để xử lý tất cả các mô hình
const modelPromises = modelFiles.map(async file => {
  // Chuyển đổi đường dẫn sang định dạng file://
  const modelPath = pathToFileURL(path.join(__dirname, file)).href;
  const model = await import(modelPath).then(mod => mod.default(sequelize, DataTypes));
  db[model.name] = model;
});

// Đợi cho tất cả mô hình được import
Promise.all(modelPromises).then(() => {
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
});

// Gán sequelize và Sequelize vào db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
