'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const{orders} = models;
      users.hasMany(orders, {foreignKey: 'user_id', })
      
      // define association here
    }
  }
  users.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.ENUM("admin", "seller", "cashier"),
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return users;
};