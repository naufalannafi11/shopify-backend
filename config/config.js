require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    host: 'database', // This should be the service name, not the hostname
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      connectTimeout: 30000,
    },
  },
  test: {
    username: 'user',
    password: 'password',
    database: 'shopify_like',
    host: 'database',
    dialect: 'postgres',
  },
  production: {
    username: 'user',
    password: 'password',
    database: 'shopify_like',
    host: 'database',
    dialect: 'postgres',
  },
};