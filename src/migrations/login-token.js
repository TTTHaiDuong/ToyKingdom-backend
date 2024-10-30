'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await this.down(queryInterface, Sequelize);
    await queryInterface.createTable('LoginTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /**Mã người dùng */
      userId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      refreshToken: {
        type: Sequelize.TEXT
      },
      accessToken: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LoginTokens');
  }
};