'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Discount.belongsTo(models.Product, {
        foreignKey: 'productId',
      });
    }
  }

  Discount.init({
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    percentage: DataTypes.TINYINT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Discount',
    timestamps: false,

    hooks: {
      afterSave: async (discount, options) => {
        if (discount.percentage === 0 || !discount.percentage) {
          await discount.destroy();
        }
      }
    }
  });

  return Discount;
};