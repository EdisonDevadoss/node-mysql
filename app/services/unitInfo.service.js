const UnitInfo = require('../models/unitInfo.model');

function get(id) {
    return UnitInfo.get(id);
}

function getUnitInfo(unitId) {
    return UnitInfo.store.connection
        .raw(
            `select unit_info.unit_id, unit_info.unit_address, unit_info.saction_strength, unit_info.available_strength, unit_info.near_airport, unit_info.unit_distance, unit_info.near_rail, unit_info.rail_distance, unit_info.airport_distance, unit_info.near_cisf_unit_id, unit.name_code, unit1.name_code as near_unit_name_code, unit.bar_color from unit_info join unit on unit_info.unit_id = unit.unit_id join unit as unit1 on unit_info.near_cisf_unit_id = unit1.unit_id where unit_info.unit_id = ${unitId}`
        )
        .then(value => value[0]);
}


module.exports = {
    get,
    getUnitInfo
};
