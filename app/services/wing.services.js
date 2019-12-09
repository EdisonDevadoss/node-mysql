const Wing = require('../models/wing.model');

function get(id) {
  return Wing.get(id);
}

function getAll() {
  return Wing;
}

module.exports = {
  get,
  getAll
};
