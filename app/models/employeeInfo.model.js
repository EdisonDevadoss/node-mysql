const Store = require('openrecord/store/mysql');

class EmployeeInfo extends Store.BaseModel {
  static definition() {
    this.belongsTo('wing', { from: 'wing_type' });
  }
}

module.exports = EmployeeInfo;
