'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // (0..N) Sản phẩm không hoặc có nhiều danh mục sản phẩm
      Product.belongsToMany(models.Category, {
        through: 'ProductCategory',
        foreignKey: 'productId',
        otherKey: 'categoryId'
      });
      // (0..1) Một sản phẩm có một hoặc không giảm giá
      Product.belongsTo(models.Discount, {
        foreignKey: 'discountId'
      });
      // (0..N) Một sản phẩm có thể có nhiều hình ảnh sản phẩm của nó
      Product.hasMany(models.ProductImage);
      // (0..N) Một sản phẩm có thể có nhiều đánh giá sản phẩm
      Product.hasMany(models.ProductReview);
      // (0..N) Một sản phẩm có thể được bán nhiều lần
      Product.hasMany(models.SoldProduct);
      // (0..1) Một sản phẩm có thể là một sản phẩm trong kho
      Product.hasOne(models.InventoryProduct, {
        foreignKey: 'productId'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    suitableAge: DataTypes.TINYINT,
    tag: DataTypes.STRING,
    discountId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Discount',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};