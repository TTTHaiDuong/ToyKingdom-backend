'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE InventoryProducts AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('InventoryProducts', [
            {
                productId: 1,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 2,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 3,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 4,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 5,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 6,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 7,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 8,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 9,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 10,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 10, 0, 0, 0),
                updatedAt: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 11,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 12,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 13,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 14,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 15,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 16,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 17,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 18,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 19,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            },
            {
                productId: 20,
                quantity: 20,
                forSale: true,
                createdAt: new Date(2024, 9, 20, 0, 0, 0),
                updatedAt: new Date(2024, 9, 20, 0, 0, 0)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('InventoryProducts', null, {});
    }
};

