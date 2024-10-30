'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await this.down(queryInterface, Sequelize);
        await queryInterface.createTable('InventoryProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productId: {
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            isSale: {
                type: Sequelize.BOOLEAN
            }
        }, { timestamps: false });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('InventoryProducts');
    }
}