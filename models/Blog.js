
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
Underscoreid:String , 

stext:String 


})

module.exports = {
  Blog : mongoose.model('Blog', blogSchema),
}

