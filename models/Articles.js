//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const ArticlesSchema = new mongoose.Schema({
  username: {type: String, required: true},
  // password: "string"
  title: {type: String, unique: true, required: true},
  author: String,
  link: String,
  body: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articles', ArticlesSchema);