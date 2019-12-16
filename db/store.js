const Store = require('openrecord/store/mysql');
const TypeDetial = require('../app/models/typeDetial.model');
const Wing = require('../app/models/wing.model');
const EmployeeInfo = require('../app/models/employeeInfo.model');
const Unit = require('../app/models/unit.model');
const UnitInfo = require('../app/models/unitInfo.model');
const ForeCast = require('../app/models/forecast.model');

const store = new Store({
  connection: {
    host: 'localhost',
    type: 'mysql',
    user: 'root',
    password: 'edison',
    database: 'wars'
  },
  models: [Wing, TypeDetial, EmployeeInfo, Unit, UnitInfo, ForeCast],
  inflection: {
    wings: 'wing',
    employee_infos: 'employee_info',
    units: 'unit',
    unit_infos: 'unit_info',
    forecasts: 'forecast'
  }
});

store.ready(async () => {
  const post = await store.Model('wing').find(1);
  console.log('post is', post.toJSON());
});

module.exports = store;
