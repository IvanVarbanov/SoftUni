require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        databaseUrl: process.env.DB_URL,
    },
    production: {},
};

module.exports = config[env];
