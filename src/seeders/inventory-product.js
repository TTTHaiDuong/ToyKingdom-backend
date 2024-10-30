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
                isSale: true
            },
            {
                productId: 2,
                quantity: 20,
                isSale: true
            },
            {
                productId: 3,
                quantity: 20,
                isSale: true
            },
            {
                productId: 4,
                quantity: 20,
                isSale: true
            },
            {
                productId: 5,
                quantity: 20,
                isSale: true
            },
            {
                productId: 6,
                quantity: 20,
                isSale: true
            },
            {
                productId: 7,
                quantity: 20,
                isSale: true
            },
            {
                productId: 8,
                quantity: 20,
                isSale: true
            },
            {
                productId: 9,
                quantity: 20,
                isSale: true
            },
            {
                productId: 10,
                quantity: 20,
                isSale: true
            },
            {
                productId: 11,
                quantity: 20,
                isSale: true
            },
            {
                productId: 12,
                quantity: 20,
                isSale: true
            },
            {
                productId: 13,
                quantity: 20,
                isSale: true
            },
            {
                productId: 14,
                quantity: 20,
                isSale: true
            },
            {
                productId: 15,
                quantity: 20,
                isSale: true
            },
            {
                productId: 16,
                quantity: 20,
                isSale: true
            },
            {
                productId: 17,
                quantity: 20,
                isSale: true
            },
            {
                productId: 18,
                quantity: 20,
                isSale: true
            },
            {
                productId: 19,
                quantity: 20,
                isSale: true
            },
            {
                productId: 20,
                quantity: 20,
                isSale: true
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('InventoryProducts', null, {});
    }
};

