'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
            CREATE FUNCTION remove_vietnamese_accents(input VARCHAR(255))
            RETURNS VARCHAR(255)
            DETERMINISTIC
            BEGIN
                DECLARE output VARCHAR(255);
                
                SET output = REPLACE(output, 'á', 'a');
                SET output = REPLACE(output, 'à', 'a');
                SET output = REPLACE(output, 'ả', 'a');
                SET output = REPLACE(output, 'ã', 'a');
                SET output = REPLACE(output, 'ạ', 'a');
                SET output = REPLACE(output, 'ấ', 'a');
                SET output = REPLACE(output, 'ầ', 'a');
                SET output = REPLACE(output, 'ẩ', 'a');
                SET output = REPLACE(output, 'ẫ', 'a');
                SET output = REPLACE(output, 'ậ', 'a');
                SET output = REPLACE(output, 'ắ', 'a');
                SET output = REPLACE(output, 'ằ', 'a');
                SET output = REPLACE(output, 'ẳ', 'a');
                SET output = REPLACE(output, 'ẵ', 'a');
                SET output = REPLACE(output, 'ặ', 'a');
                
                SET output = REPLACE(output, 'é', 'e');
                SET output = REPLACE(output, 'è', 'e');
                SET output = REPLACE(output, 'ẻ', 'e');
                SET output = REPLACE(output, 'ẽ', 'e');
                SET output = REPLACE(output, 'ẹ', 'e');
                
                SET output = REPLACE(output, 'í', 'i');
                SET output = REPLACE(output, 'ì', 'i');
                SET output = REPLACE(output, 'ỉ', 'i');
                SET output = REPLACE(output, 'ĩ', 'i');
                SET output = REPLACE(output, 'ị', 'i');
                
                SET output = REPLACE(output, 'ó', 'o');
                SET output = REPLACE(output, 'ò', 'o');
                SET output = REPLACE(output, 'ỏ', 'o');
                SET output = REPLACE(output, 'õ', 'o');
                SET output = REPLACE(output, 'ọ', 'o');
                
                SET output = REPLACE(output, 'ú', 'u');
                SET output = REPLACE(output, 'ù', 'u');
                SET output = REPLACE(output, 'ủ', 'u');
                SET output = REPLACE(output, 'ũ', 'u');
                SET output = REPLACE(output, 'ụ', 'u');
                
                SET output = REPLACE(output, 'ý', 'y');
                SET output = REPLACE(output, 'ỳ', 'y');
                SET output = REPLACE(output, 'ỷ', 'y');
                SET output = REPLACE(output, 'ỹ', 'y');
                SET output = REPLACE(output, 'ỵ', 'y');
                
                SET output = REPLACE(output, 'đ', 'd');
                
                RETURN output;
            END;
        `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
            DROP FUNCTION IF EXISTS remove_vietnamese_accents;
        `);
  }
};
