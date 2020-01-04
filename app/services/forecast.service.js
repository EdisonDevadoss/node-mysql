const ForeCast = require('../models/forecast.model');


function getByUnitId(unitId) {
    return ForeCast.store.connection
        .raw(
            `select event_id, unit_id,  event_brief, event_date from forecast where unit_id = ${unitId}`
        )
        .then(value => value[0]);
}

module.exports = {
    getByUnitId
};
