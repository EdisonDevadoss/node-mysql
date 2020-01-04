/* eslint-disable indent */
const unitInfoController = require('../controllers/unitInfo.controller');

function unitInfos(fastify, opts, next) {
    fastify.get('/units_details', unitInfoController.unitInfoDetail);
    next();
}

module.exports = unitInfos;
