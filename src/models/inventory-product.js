'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class InventoryProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // Một sản phẩm trong kho được xem là một sản phẩm
            InventoryProduct.belongsTo(models.Product, {
                foreignKey: 'productId'
            });
        }
    }

    InventoryProduct.init({
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        quantity: DataTypes.INTEGER,
        isSale: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'InventoryProduct',
        timestamps: false
    });

    return InventoryProduct;
};