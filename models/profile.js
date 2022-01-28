const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  //username: String,
  firstName: String,
  lastName: String,
  bio: String
})

module.exports.Profile = mongoose.model('Profile', profileSchema)