const forecastController = require('../controllers/forecast.controller');

function forecasts(fastify, opts, next) {
    fastify.get('/forecast/:id', forecastController.getByUnitId);
    next();
}

module.exports = forecasts;
