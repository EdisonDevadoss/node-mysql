const Store = require('openrecord/store/postgres');

class Unit extends Store.BaseModel {
  static definition() {
    this.belongsTo('unit_info', { from: 'unit_id' });
  }
}

module.exports = Unit;
