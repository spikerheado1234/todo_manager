// Defining the scehma and model for events in the todo manager to be stored.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var event = Schema(
  {
    event : { type: String, required: true}
  }
);

// A virtual attribute, helping to define a unique link for each todo event. For ease of deletion later.
event.virtual('url').get(function() {
  return '/delete/' + this._id;
  }
);

// A virtual attribute, helping to define a unique link for each todo event. For ease of updating later. 
event.virtual('update').get(function() {
  return '/update/' + this._id;
  }
);

module.exports = mongoose.model('Event', event);
