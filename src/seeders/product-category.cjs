'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query('ALTER TABLE ProductCategories AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('ProductCategories', [
            {
                productId: 1,
                categoryId: 2
            },
            {
                productId: 2,
                categoryId: 4
            },
            {
                productId: 3,
                categoryId: 3
            },
            {
                productId: 4,
                categoryId: 3
            },
            {
                productId: 5,
                categoryId: 3
            },
            {
                productId: 5,
                categoryId: 7
            },
            {
                productId: 6,
                categoryId: 8
            },
            {
                productId: 7,
                categoryId: 1
            },
            {
                productId: 8,
                categoryId: 1
            },
            {
                productId: 9,
                categoryId: 9
            },
            {
                productId: 10,
                categoryId: 9
            },
            {
                productId: 11,
                categoryId: 6
            },
            {
                productId: 12,
                categoryId: 6
            },
            {
                productId: 13,
                categoryId: 9
            },
            {
                productId: 13,
                categoryId: 10
            },
            {
                productId: 14,
                categoryId: 9
            },
            {
                productId: 15,
                categoryId: 11
            },
            {
                productId: 15,
                categoryId: 3
            },
            {
                productId: 15,
                categoryId: 11
            },
            {
                productId: 16,
                categoryId: 5
            },
            {
                productId: 16,
                categoryId: 9
            },
            {
                productId: 16,
                categoryId: 12
            },
            {
                productId: 17,
                categoryId: 5
            },
            {
                productId: 17,
                categoryId: 12
            },
            {
                productId: 18,
                categoryId: 12
            },
            {
                productId: 19,
                categoryId: 3
            },
            {
                productId: 20,
                categoryId: 3
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ProductCategories', null, {});
    }
};

