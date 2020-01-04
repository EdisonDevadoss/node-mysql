const fastify = require('fastify')();

const swagger = require('fastify-swagger');
const cors = require('fastify-cors');

const swaggerOptions = require('./app/lib/swagger');
const wingsRoutes = require('./app/routes/wings.routes');
const employeeInfos = require('./app/routes/employeeInfos.routes');
const units = require('./app/routes/units.routes');
const unitInfos = require('./app/routes/unitInfos.routes');
const paradeStatements = require('./app/routes/paradeStatements.routes');
const forecasts = require('./app/routes/forecasts.routes');


function build() {
  fastify.register(cors, {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: ['Authorization', 'Content-Type'],
    exposedHeaders: ['Authorization', 'Content-Type'],
    optionsSuccessStatus: 204
  });
  fastify.register(swagger, swaggerOptions);

  fastify.register(wingsRoutes, { prefix: '/v1' });
  fastify.register(employeeInfos, { prefix: '/v1' });
  fastify.register(units, { prefix: '/v1' });
  fastify.register(unitInfos, { prefix: '/v1' });
  fastify.register(paradeStatements, { prefix: '/v1' });
  fastify.register(forecasts, { prefix: '/v1' });

  fastify.get('/', async (req, res) => {
    res.send({ hello: 'world' });
  });
  return fastify;
}

module.exports = { build };
