const WingService = require('../services/wing.services');
const renderError = require('../lib/renderError');

exports.getById = (req, reply) => {
  const { params } = req;
  WingService.get(params.id)
    .then((wing) => {
      reply.code(200).send(wing);
    })
    .catch((error) => {
      renderError(reply, error);
    });
};

exports.list = (req, reply) => {
  WingService.getAll()
    .then((wings) => {
      reply.code(200).send(wings);
    })
    .catch((error) => {
      renderError(reply, error);
    });
};
