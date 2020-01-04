const ParadementService = require('../services/paradeStatement.service');
const renderError = require('../lib/renderError');

exports.getById = (req, reply) => {
    const { query } = req;
    console.log('params is', query);
    ParadementService.getById(query.id)
        .then((wing) => {
            reply.code(200).send(wing);
        })
        .catch((error) => {
            renderError(reply, error);
        });
};
