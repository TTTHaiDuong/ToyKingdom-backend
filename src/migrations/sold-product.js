'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
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
        await queryInterface.dropTable('SoldProducts');
    }
}