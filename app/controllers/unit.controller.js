const Unit = require('../services/unit.service');
const renderError = require('../lib/renderError');
const stateUnits = require('./tempUnit');

exports.list = (req, reply) => {
  Unit.getAll()
    .then((units) => {
      reply.code(200).send(units);
    })
    .catch((error) => {
      renderError(reply, error);
      // reply.code(200).send(stateUnits);
    });
};

exports.unitWithAddress = (req, reply) => {
  Unit.getUnitWithAddress()
    .then((units) => {
      reply.code(200).send(units);
    })
    .catch((error) => {
      renderError(reply, error);
      // reply.code(200).send(stateUnits);
    });
};

exports.detailUnit = (req, reply) => {
  const { query } = req;
  console.log('query is', req.query);
  const { state, month, year } = query;
  Unit.getDetailByStateAndMonth(state, month, year)
    .then((units) => {
      reply.code(200).send(units);
    })
    .catch((error) => {
      renderError(reply, error);
      // reply.code(200).send(stateUnits);
    });
};
