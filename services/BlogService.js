/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Blog } = require('../models/Blog');

/**
* Creates the data
*
* blog Blog data to be created
* returns blog
* */
const createblog = ({ blog }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Blog(blog).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* blogId String the Id parameter
* no response value expected for this operation
* */
const deleteblog = ({ blogId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Blog.findOneAndDelete({ _id:blogId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllblog = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Blog.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* blogId String the Id parameter
* returns blog
* */
const getblog = ({ blogId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Blog.findById(blogId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* blogId String the Id parameter
* blog Blog data to be updated (optional)
* returns blog
* */
const updateblog = ({ blogId, blog }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Blog.findOneAndUpdate({ _id:blogId },blog).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createblog,
  deleteblog,
  getAllblog,
  getblog,
  updateblog,
};
