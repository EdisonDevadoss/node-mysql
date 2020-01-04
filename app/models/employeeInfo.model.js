const Store = require('openrecord/store/postgres');

class EmployeeInfo extends Store.BaseModel {
  static definition() {
    this.belongsTo('wing', { from: 'wing_type' });
  }
}

module.exports = EmployeeInfo;
