const knex = require('knex');
const configuration = require('../../knexfile'); /** importar as configurações do  bd que estão disponives no index.js */

const config = process.env.NODE_ENV ==='test'? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;