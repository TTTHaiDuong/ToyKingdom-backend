'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE Categories AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('Categories', [
            {
                // 1
                name: 'Thú bông',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 2
                name: 'Xe điều khiển',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 3
                name: 'Đồ chơi lắp ghép',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 4
                name: 'Trực thăng',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 5
                name: 'Đồ chơi sơ sinh',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 6
                name: 'Xe đạp',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 7
                name: 'Đồ chơi nhà bếp',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 8
                name: 'Đồ chơi bác sĩ',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 9
                name: 'Đồ chơi vận động',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 10
                name: 'Patin',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 11
                name: 'Robot',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            },
            {
                // 12
                name: 'Đồ chơi giáo dục',
                createdAt: new Date(2024, 9, 2, 0, 0, 0),
                updatedAt: new Date(2024, 9, 2, 0, 0, 0)
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};