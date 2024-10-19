'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class SoldProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // Sản phẩm được bán là một sản phẩm
            SoldProduct.belongsTo(models.Product);
        }
    }
    SoldProduct.init({
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        userId: DataTypes.INTEGER,
        totalAmount: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        saleDate: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'SoldProduct',
    });
    return SoldProduct;
};