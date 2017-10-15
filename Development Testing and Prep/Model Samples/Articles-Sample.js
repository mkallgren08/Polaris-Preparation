//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const ArticlesSchema = new mongoose.Schema({
  username: 'String',
  // password: "string"
  title: {type: String, unique: true},
  author: 'String',
  link: 'String',
  body: 'String'
});

module.exports = mongoose.model('Articles', ArticlesSchema);