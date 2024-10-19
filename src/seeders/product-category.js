'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE ProductCategories AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('ProductCategories', [
            {
                productId: 1,
                categoryId: 2,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 2,
                categoryId: 4,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 3,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 4,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 5,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 5,
                categoryId: 7,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 6,
                categoryId: 8,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 7,
                categoryId: 1,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 8,
                categoryId: 1,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 9,
                categoryId: 9,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 10,
                categoryId: 9,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 11,
                categoryId: 6,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 12,
                categoryId: 6,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 13,
                categoryId: 9,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 13,
                categoryId: 10,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 14,
                categoryId: 9,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 15,
                categoryId: 11,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 15,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 15,
                categoryId: 11,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 16,
                categoryId: 5,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 16,
                categoryId: 9,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 16,
                categoryId: 12,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 17,
                categoryId: 5,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 17,
                categoryId: 12,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 18,
                categoryId: 12,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 19,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                productId: 20,
                categoryId: 3,
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ProductCategories', null, {});
    }
};

