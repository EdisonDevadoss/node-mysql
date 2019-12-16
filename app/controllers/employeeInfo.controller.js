const EmployeeInfoService = require('../services/employeeInfo.service');
const renderError = require('../lib/renderError');

exports.getById = (req, reply) => {
  const { params } = req;
  EmployeeInfoService.get(params.id)
    .then((wing) => {
      reply.code(200).send(wing);
    })
    .catch((error) => {
      renderError(reply, error);
    });
};

exports.list = (req, reply) => {
  EmployeeInfoService.getAll()
    .then((wings) => {
      reply.code(200).send(wings);
    })
    .catch((error) => {
      renderError(reply, error);
    });
};

exports.countByEmployee = (req, reply) => {
  EmployeeInfoService.countByEmployee()
    .then((wings) => {
      reply.code(200).send(wings);
    })
    .catch((error) => {
      renderError(reply, error);
    });
};
