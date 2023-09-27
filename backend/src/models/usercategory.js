'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCategory extends Model {
    
    static associate(models) {
      
    }
  }
  userCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userCategory',
  });
  return userCategory;
};