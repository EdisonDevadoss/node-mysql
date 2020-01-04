const UnitInfo = require('../services/unitInfo.service');
const renderError = require('../lib/renderError');


exports.unitInfoDetail = (req, reply) => {
    const { query } = req;
    const { unitId } = query;
    UnitInfo.getUnitInfo(unitId)
        .then((units) => {
            reply.code(200).send(units);
        })
        .catch((error) => {
            renderError(reply, error);
        });
};
