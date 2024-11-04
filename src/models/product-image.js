'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // Hình ảnh sản phẩm thuộc một sản phẩm
      ProductImage.belongsTo(models.Product, {
        foreignKey: 'productId'
      });
    }
  }

  ProductImage.init({
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    url: DataTypes.STRING,
    altText: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductImage',
    timestamps: false
  });

  return ProductImage;
};