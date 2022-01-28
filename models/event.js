const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  location: String,
  info: String,
  eventDate: String
})

module.exports.Event = mongoose.model('Event', eventSchema)