//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const DronesSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  // password: "string"
  name: 'String',
  comments: 'String',
  phone: 'String'
});

module.exports = mongoose.model('Drones', DronesSchema);