const Unit = require('../models/unit.model');
const Forecast = require('../models/forecast.model');
const mapbox = require('../lib/mapboxGeocode');

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

const getLocation = address => new Promise(reslove => mapbox(
  'pk.eyJ1IjoiZWRpc29uZGV2YWRvc3MiLCJhIjoiY2s0MTNweHlhMDdwZDNwcG95cmJraGl6dyJ9.aUK57pw316_tz92_mwsagA',
  address,
  (err, data) => {
    console.log('data is', data);
    if (data.features.length) {
      const { coordinates } = data.features[0].geometry;
      const result = {
        longitude: coordinates[0],
        latitude: coordinates[1]
      };
      reslove(result);
    }
    else {
      const result = {
        longitude: null,
        latitude: null
      };
      reslove(result);
    }
  }
));

function getDetailByStateAndMonth(state, month, year) {
  return Forecast.store.connection
    .raw(
      `select forecast.event_id, forecast.unit_id, forecast.event_brief, unit.state_name, unit.unit_name, DATE_FORMAT(forecast.event_date, "%Y-%m-%d") as date, unit_info.unit_address from forecast join unit on forecast.unit_id = unit.unit_id join unit_info on unit.unit_id = unit_info.unit_id where MONTH(forecast.event_date) = ${month} and YEAR(forecast.event_date) = ${year} and unit.state_name = "${state}"`
    )
    .then((value) => {
      const result = value[0];
      const updatedResult = () => Promise.all(
        result.map(res => getLocation(res.unit_name).then((loc) => {
          const resData = {
            ...res,
            latitude: loc.latitude,
            longitude: loc.longitude
          };
          return resData;
        }))
      );
      return updatedResult().then(resp => resp);
    });
}

function getUnitWithAddress() {
  return Forecast.store.connection
    .raw(
      'select unit_id, name_code, unit_name, bar_color, state_name, ministry, unit_head_name from unit'
    )
    .then((value) => {
      const result = value[0];
      const updatedResult = () => Promise.all(
        result.map(res => getLocation(`India, ${res.state_name}, ${res.name_code}`).then((loc) => {
          const resData = {
            ...res,
            latitude: loc.latitude,
            longitude: loc.longitude
          };
          return resData;
        }))
      );
      return updatedResult().then(resp => resp);
    });
}

module.exports = {
  get,
  getAll,
  getDetailByStateAndMonth,
  getUnitWithAddress
};
