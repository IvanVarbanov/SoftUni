module.exports = {
    development: {
        port: process.env.PORT || 3000,
        databaseUrl: process.env.DB_URL,
    },
    production: {},
};
