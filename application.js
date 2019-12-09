const fastify = require('fastify')();

const swagger = require('fastify-swagger');
const cors = require('fastify-cors');

const swaggerOptions = require('./app/lib/swagger');
const wingsRoutes = require('./app/routes/wings.routes');

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

  fastify.get('/', async (req, res) => {
    res.send({ hello: 'world' });
  });
  return fastify;
}

module.exports = { build };
