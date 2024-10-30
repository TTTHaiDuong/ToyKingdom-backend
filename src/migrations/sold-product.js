'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await this.down(queryInterface, Sequelize);
        await queryInterface.createTable('SoldProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            productId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER
            },
            /**Tổng giá tiền */
            totalAmount: {
                type: Sequelize.INTEGER
            },
            /**Số lượng tồn kho */
            quantity: {
                type: Sequelize.INTEGER
            },
            saleDate: {
                type: Sequelize.DATE
            }
        }, { timestamps: false });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('SoldProducts');
    }
}