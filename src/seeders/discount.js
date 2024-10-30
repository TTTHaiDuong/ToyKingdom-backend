'use strict';
/** @type {import('sequelize-cli').Migration} */

const term1 = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
const term2 = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

module.exports = {
    async up(queryInterface, Sequelize) {
        await this.down(queryInterface, Sequelize);
        await queryInterface.sequelize.query('ALTER TABLE Discounts AUTO_INCREMENT = 1');

        return queryInterface.bulkInsert('Discounts', [
            {
                percentage: 30,
                startDate: new Date(Date.now()),
                endDate: term1
            },
            {
                percentage: 15,
                startDate: new Date(Date.now()),
                endDate: term2
            },
            {
                percentage: 10,
                startDate: new Date(Date.now()),
                endDate: term2
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Discounts', null, {});
    }
};

