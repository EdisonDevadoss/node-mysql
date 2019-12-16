const Store = require('openrecord/store/mysql');

class Forecast extends Store.BaseModel {
  static definition() {
    this.belongsTo('unit', { from: 'unit_id' });
  }
}

module.exports = Forecast;
