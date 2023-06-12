'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.Users, {foreignKey: 'user_id'});
      orders.hasMany(models.OrderDetails, {foreignKey: 'order_id'});
    }
  }
  orders.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    total: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return orders;
};