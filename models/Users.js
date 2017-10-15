//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const UsersSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  name: 'String',
  address: 'String',
  city: 'String',
  state: 'String',
  zipcode: 'Number',
  phone: 'String'
  });

module.exports = mongoose.model('Users', UsersSchema);


