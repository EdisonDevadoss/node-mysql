const Unit = require('../models/unit.model');
const Forecast = require('../models/forecast.model');

function get(id) {
  return Unit.get(id);
}

function getAll() {
  return Forecast.store.connection
    .raw(
      'select unit.state_name, count(unit.state_name) as event_count, MONTH(event_date) as date from forecast join unit on unit.unit_id = forecast.unit_id group by unit.state_name, MONTH(event_date)'
    )
    .then(value => value[0]);
}

function getDetailByStateAndMonth(state, month, year) {
  return Forecast.store.connection
    .raw(
      `select forecast.event_id, forecast.unit_id, unit.state_name, unit.unit_name, DATE_FORMAT(forecast.event_date, "%Y-%m-%d") as date, unit_info.unit_address from forecast join unit on forecast.unit_id = unit.unit_id join unit_info on unit.unit_id = unit_info.unit_id where MONTH(forecast.event_date) = ${month} and YEAR(forecast.event_date) = ${year} and unit.state_name = "${state}"`
    )
    .then(value => value[0]);
}

module.exports = {
  get,
  getAll,
  getDetailByStateAndMonth
};
