const sequelize = require('./database')
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;
sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(` Servidor está rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar banco de dados:', error);
    });


