'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await this.down(queryInterface, Sequelize);
    await queryInterface.createTable('ProductReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      /**Mã sản phẩm */
      productId: {
        type: Sequelize.INTEGER
      },
      /**Mã người dùng */
      userId: {
        type: Sequelize.INTEGER
      },
      /**Tỉ lệ đánh giá */
      rating: {
        type: Sequelize.DECIMAL(2, 1)
      },
      /**Lời đánh giá */
      comment: {
        type: Sequelize.TEXT
      },
      /**Ngày đánh giá */
      reviewDate: {
        type: Sequelize.DATE
      }
    }, { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductReviews');
  }
}