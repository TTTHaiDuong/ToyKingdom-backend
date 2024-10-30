'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await this.down(queryInterface, Sequelize);
    await queryInterface.sequelize.query('ALTER TABLE Users AUTO_INCREMENT = 1');

    return queryInterface.bulkInsert('Users', [
      {
        email: 'owner@example.com',
        phone: '9999999999',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Chủ sở hữu',
        role: 'owner',
        createdAt: new Date(2024, 9, 2, 0, 0, 0),
        updatedAt: new Date(2024, 9, 2, 0, 0, 0)
      },
      {
        email: 'admin1@example.com',
        phone: '8383838383',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Quản trị viên 1',
        role: 'admin',
        createdAt: new Date(2024, 9, 3, 0, 0, 0),
        updatedAt: new Date(2024, 9, 3, 0, 0, 0)
      },
      {
        email: 'admin2@example.com',
        phone: '8686868686',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Quản trị viên 2',
        role: 'admin',
        createdAt: new Date(2024, 9, 4, 0, 0, 0),
        updatedAt: new Date(2024, 9, 4, 0, 0, 0)
      },
      {
        email: 'duong@example.com',
        phone: '7979797979',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Trần Hải Dương',
        role: 'user',
        createdAt: new Date(2024, 9, 5, 0, 0, 0),
        updatedAt: new Date(2024, 9, 5, 0, 0, 0)
      },
      {
        email: 'tu@example.com',
        phone: '3939393939',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Nguyễn Văn Tú',
        role: 'user',
        createdAt: new Date(2024, 9, 6, 0, 0, 0),
        updatedAt: new Date(2024, 9, 6, 0, 0, 0)
      },
      {
        email: 'nhan@example.com',
        phone: '7878787878',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Mai Xuân Nhân',
        role: 'user',
        createdAt: new Date(2024, 9, 7, 0, 0, 0),
        updatedAt: new Date(2024, 9, 7, 0, 0, 0)
      },
      {
        email: 'huy@example.com',
        phone: '3838383838',
        password: await bcrypt.hash('user123', 10),
        fullName: 'Nguyễn Hoàng Huy',
        role: 'user',
        createdAt: new Date(2024, 9, 8, 0, 0, 0),
        updatedAt: new Date(2024, 9, 8, 0, 0, 0)
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

