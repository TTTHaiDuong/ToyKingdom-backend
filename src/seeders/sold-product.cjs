'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query('ALTER TABLE SoldProducts AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('SoldProducts', [
            {
                productId: 4,
                userId: 4,
                price: 3275000,
                quantity: 4,
                saleDate: new Date(2024, 9, 10, 0, 0, 0)
            },
            {
                productId: 8,
                userId: 4,
                price: 399000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 15 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 5,
                userId: 5,
                price: 659000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 30 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 10,
                userId: 5,
                price: 834000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 45 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 6,
                userId: 6,
                price: 439000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 60 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 12,
                userId: 6,
                price: 3018000,
                quantity: 4,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 75 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 7,
                userId: 7,
                price: 329000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 100 * 24 * 60 * 60 * 1000)
            },
            {
                productId: 14,
                userId: 7,
                price: 1279000,
                quantity: 5,
                saleDate: new Date(new Date(2024, 9, 10, 0, 0, 0).getTime() + 125 * 24 * 60 * 60 * 1000)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('SoldProducts', null, {});
    }
};

