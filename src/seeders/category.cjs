'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.query('ALTER TABLE Categories AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('Categories', [
            /* 1*/ { name: 'Thú bông' },
            /* 2*/ { name: 'Xe điều khiển' },
            /* 3*/ { name: 'Đồ chơi lắp ghép' },
            /* 4*/ { name: 'Trực thăng' },
            /* 5*/ { name: 'Đồ chơi sơ sinh' }, // Đồ chơi Lego // Đồ chơi cầm tay // Khác
            /* 6*/ { name: 'Xe đạp' },
            /* 7*/ { name: 'Đồ chơi nhà bếp' },
            /* 8*/ { name: 'Đồ chơi bác sĩ' },
            /* 9*/ { name: 'Đồ chơi vận động' },
           /* 10*/ { name: 'Patin' },
           /* 11*/ { name: 'Robot' },
           /* 12*/ { name: 'Đồ chơi giáo dục' }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};