const ForecastService = require('../services/forecast.service');
const renderError = require('../lib/renderError');

exports.getByUnitId = (req, reply) => {
    const { params } = req;
    ForecastService.getByUnitId(params.id)
        .then((wing) => {
            reply.code(200).send(wing);
        })
        .catch((error) => {
            renderError(reply, error);
        });
};
