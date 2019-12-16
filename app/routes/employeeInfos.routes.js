const { listSchema, getByIdSchema } = require('./employeeInfos.schema');
const employeeInfoController = require('../controllers/employeeInfo.controller');

function employeeInfos(fastify, opts, next) {
  fastify.get('/employeeInfo/:id', getByIdSchema, employeeInfoController.getById);
  fastify.get('/employeeInfo', listSchema, employeeInfoController.list);
  fastify.get('/employee_count', listSchema, employeeInfoController.countByEmployee);
  next();
}

module.exports = employeeInfos;
