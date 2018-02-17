var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = Schema(
  {
    event : { type: String, required: true}
  }
);

module.exports = mongoose.model('Event', event);