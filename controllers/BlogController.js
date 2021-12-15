/**
 * The BlogController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BlogService');
const createblog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createblog);
};

const deleteblog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteblog);
};

const getAllblog = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllblog);
};

const getblog = async (request, response) => {
  await Controller.handleRequest(request, response, service.getblog);
};

const updateblog = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateblog);
};


module.exports = {
  createblog,
  deleteblog,
  getAllblog,
  getblog,
  updateblog,
};
