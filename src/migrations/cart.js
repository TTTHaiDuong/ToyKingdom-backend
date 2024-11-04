'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await this.down(queryInterface, Sequelize);
        await queryInterface.createTable('Carts', {
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
            price: {
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            addDate: {
                type: Sequelize.DATE
            }
        }, { timestamps: false });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Carts');
    }
}