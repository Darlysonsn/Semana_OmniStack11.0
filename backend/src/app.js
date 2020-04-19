const express = require('express');
const cors = require('cors')
const routes = require('./routes');  
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota/ Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

/**
 * Tipos de parametros:
 * Query params: Parametros nomeados enviado na rota apos "?" (Filtros, paginação) 
 * Routr params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB etc
  */

module.exports = app;
