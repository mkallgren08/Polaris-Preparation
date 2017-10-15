//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const UsersSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  // password: "string"
  name: 'String',
  address: 'String',
  location: {
    lat: "String",
    lng: "String"
  },
  safe: "Boolean",
  needs: {
    category: 'String',
    specifics: 'String'
  },
  articles: [],
  phone: 'String'
});

module.exports = mongoose.model('Users', UsersSchema);


