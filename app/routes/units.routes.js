const unitController = require('../controllers/unit.controller');

function units(fastify, opts, next) {
  fastify.get('/units', unitController.list);
  fastify.get('/unit_detail', unitController.detailUnit);
  next();
}

module.exports = units;
