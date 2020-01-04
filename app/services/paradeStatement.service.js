/* eslint-disable indent */
const ParadeStatement = require('../models/paradeStatement.model');


function getById(unitId) {
    return ParadeStatement.store.connection
        .raw(
            `select unit_id, parade_id, total_strength, deficiency, surplus, total_out, created_on, posted from parade_statement where unit_id = ${unitId}`
        )
        .then(value => value[0]);
}

module.exports = {
    getById
};
