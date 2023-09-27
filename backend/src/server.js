const sequelize=require('./database')
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;
sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${ PORT }`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });


