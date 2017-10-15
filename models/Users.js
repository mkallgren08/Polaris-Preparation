//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const UsersSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  // password: "string"
  username: {type: String, required: true},
  address: {type: String, required: true},
  location: {
    lat: String,
    lng: String
  },
  safe: Boolean,
  needs: {
    category: String,
    specifics: String
  },
  articles: [],
  phone: String
});

module.exports = mongoose.model('Users', UsersSchema);


