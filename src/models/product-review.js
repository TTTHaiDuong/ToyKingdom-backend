'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class ProductReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      // Đánh giá sản phẩm thuộc một sản phẩm
      ProductReview.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  ProductReview.init({
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    userId: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL(2, 1),
    comment: DataTypes.TEXT,
    reviewDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ProductReview',
    timestamps: false
  });

  return ProductReview;
};