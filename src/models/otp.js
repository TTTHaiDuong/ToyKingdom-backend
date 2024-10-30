'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class OTP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OTP.init({
    sendAddress: DataTypes.STRING,
    otpCode: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'OTP',
  });
  return OTP;
};