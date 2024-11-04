'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Category.belongsToMany(models.Product, {
        through: 'ProductCategory',
        foreignKey: 'categoryId',
        otherKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false
  });

  return Category;
};