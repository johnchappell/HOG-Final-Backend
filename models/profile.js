const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  bio: String,
  email: String,
  image: String,
  cv: String
 // favourite: Boolean,
})

module.exports.Profile = mongoose.model('Profile', profileSchema)