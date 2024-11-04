'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class SoldProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // Một bản ghi sản phẩm được bán là một bản ghi sản phẩm
            SoldProduct.belongsTo(models.Product, {
                foreignKey: 'productId'
            });
        }
    }

    SoldProduct.init({
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        totalAmount: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        saleDate: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'SoldProduct',
        timestamps: false
    });

    return SoldProduct;
};