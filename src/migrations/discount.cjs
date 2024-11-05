'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /**Phần trăm giảm giá */
      percentage: {
        type: Sequelize.TINYINT
      },
      /**Thời gian bắt đầu giảm giá */
      startDate: {
        type: Sequelize.DATE
      },
      /**Thời gian kết thúc giảm giá */
      endDate: {
        type: Sequelize.DATE
      }
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Discounts');
  }
}