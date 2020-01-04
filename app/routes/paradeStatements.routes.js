/* eslint-disable indent */
const paradeStatementController = require('../controllers/paradeStatement.controller');

function paradeStatements(fastify, opts, next) {
    fastify.get('/parade_statement', paradeStatementController.getById);
    next();
}

module.exports = paradeStatements;
