const Store = require('openrecord/store/postgres');
const TypeDetial = require('../app/models/typeDetial.model');
const Wing = require('../app/models/wing.model');
const EmployeeInfo = require('../app/models/employeeInfo.model');
const Unit = require('../app/models/unit.model');
const UnitInfo = require('../app/models/unitInfo.model');
const ForeCast = require('../app/models/forecast.model');
const ParadeStatement = require('../app/models/paradeStatement.model');

const store = new Store({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  models: [Wing, TypeDetial, EmployeeInfo, Unit, UnitInfo, ForeCast, ParadeStatement],
  inflection: {
    wings: 'wing',
    employee_infos: 'employee_info',
    units: 'unit',
    unit_infos: 'unit_info',
    forecasts: 'forecast',
    parade_statements: 'parade_statement'
  }
});

store.ready(async () => {
  const post = await store.Model('wing').find(1);
  console.log('post is', post.toJSON());
});

module.exports = store;
