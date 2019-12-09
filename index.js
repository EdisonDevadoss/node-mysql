const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const store = require('./db/store');

const app = require('./application');

const fastify = app.build();

const start = async () => {
  try {
    await store.ready();
    await fastify.listen(PORT, '0.0.0.0');
    // fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
