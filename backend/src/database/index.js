const Sequelize = require('sequelize');
const configDB = require('../config/config');

const connection = new Sequelize(configDB.development);


module.exports = connection
