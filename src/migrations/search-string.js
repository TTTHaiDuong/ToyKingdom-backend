'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
            CREATE FUNCTION search_string(att VARCHAR(255), input VARCHAR(255))
            RETURNS BOOLEAN
            DETERMINISTIC
            BEGIN
                DECLARE nor_att VARCHAR(255);
                DECLARE nor_input VARCHAR(255);
                
                SET nor_att = LOWER(TRIM(remove_vietnamese_accents(att)));
                SET nor_input = LOWER(TRIM(remove_vietnamese_accents(input)));

                IF nor_att LIKE CONCAT('%', nor_input, '%') THEN
                    RETURN TRUE;
                ELSE
                    RETURN FALSE;
                END IF;
            END;
        `);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
            DROP FUNCTION IF EXISTS search_string;
        `);
    }
};
