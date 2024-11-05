'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /**Mã sản phẩm */
      productId: {
        type: Sequelize.INTEGER,
      },
      /**Mã danh mục */
      categoryId: {
        type: Sequelize.INTEGER,
      }
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductCategories');
  }
}