const unitController = require('../controllers/unit.controller');

function units(fastify, opts, next) {
  fastify.get('/units', unitController.list);
  fastify.get('/units_with_address', unitController.unitWithAddress);
  fastify.get('/unit_detail', unitController.detailUnit);
  next();
}

module.exports = units;
