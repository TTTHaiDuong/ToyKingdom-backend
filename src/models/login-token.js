'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class LoginToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  LoginToken.init({
    userId: {
      type: DataTypes.INTEGER,
      unique: true
    },
    refreshToken: DataTypes.TEXT,
    accessToken: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'LoginToken',
  });

  return LoginToken;
};