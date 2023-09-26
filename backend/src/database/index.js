const Sequelize = require('sequelize');
const configDB = require('../config/config');

const User = require('../models/user')

const connection = new Sequelize(configDB.development);

User.init(connection)

    (async () => {
        try {
            await connection.authenticate();
            console.log('Conexão com o banco de dados estabelecida com sucesso!.');
        } catch (error) {
            console.error('Erro na conexão com o banco de dados', error);
        }
    })();

module.exports = connection