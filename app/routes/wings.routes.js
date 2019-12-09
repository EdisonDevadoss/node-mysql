const { listSchema, getByIdSchema } = require('./wings.schema');
const qualificationController = require('../controllers/wings.controller');

function wings(fastify, opts, next) {
  fastify.get('/wings/:id', getByIdSchema, qualificationController.getById);
  fastify.get('/wings', listSchema, qualificationController.list);
  next();
}

module.exports = wings;
