'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductImages', {
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
      /**Đường dẫn chứa hình ảnh */
      url: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      /**Văn bản thay thế dùng cho SEO */
      altText: {
        type: Sequelize.STRING
      }
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductImages');
  }
}