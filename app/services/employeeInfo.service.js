const EmployeeInfo = require('../models/employeeInfo.model');

function get(id) {
  return EmployeeInfo.get(id);
}

function getAll() {
  return EmployeeInfo;
}

function countByEmployee() {
  return EmployeeInfo.join('JOIN wing on employee_info.wing_id = wing.wing_id')
    .group('employee_info.wing_id')
    .select('wing.wing', 'wing.wing_id', 'count(employee_info.wing_id) as wing_count')
    .then(value => value);
}

module.exports = {
  get,
  getAll,
  countByEmployee
};
