'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE SoldProducts AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('SoldProducts', [
            {
                productId: 4,
                userId: 4,
                totalAmount: 13100000,
                quantity: 4,
                saleDate: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 8,
                userId: 4,
                totalAmount: 1596000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 15 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 5,
                userId: 5,
                totalAmount: 3295000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 30 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 10,
                userId: 5,
                totalAmount: 4170000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 45 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 6,
                userId: 6,
                totalAmount: 1756000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 60 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 12,
                userId: 6,
                totalAmount: 12072000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 75 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 7,
                userId: 7,
                totalAmount: 1645000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 100 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 14,
                userId: 7,
                totalAmount: 6395000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 125 * 24 * 60 * 60 * 1000)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('SoldProducts', null, {});
    }
};

