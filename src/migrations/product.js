'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /**Tên sản phẩm */
      name: {
        type: Sequelize.STRING
      },
      /**Mã giảm giá */
      discountId: {
        type: Sequelize.INTEGER
      },
      /**Giá gốc */
      price: {
        type: Sequelize.INTEGER
      },
      /**Mô tả sản phẩm */
      description: {
        type: Sequelize.TEXT
      },
      /**Hãng sản xuất */
      brand: {
        type: Sequelize.STRING
      },
      /**Độ tuổi phù hợp */
      suitableAge: {
        type: Sequelize.TINYINT
      },
      /**Nhãn cho sản phẩm (mới, hot,...) */
      tag: {
        type: Sequelize.STRING
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
}