var event = require('../models/todoEventModel.js');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.create_todoEvent = [
  body('event').isLength({ min: 1}).trim(),
  sanitizeBody('event').trim().escape(),
  (req, res, next) => {
    var errors = validationResult(req);

    if (!errors.isEmpty()) { // If there are errors whilst validating and sanitizing the data, reder the error page.
      res.render('error', { error: errors.array()});
    } else { // Else create a new object from the data and save it to the database.
      var new_event = {
        event : req.body.event
      };
      var data = new event(new_event);
      data.save();
      event.find().then(function(doc) {
        res.render('index', {title: 'TODO MANAGER', items: doc});
      });
    }
  }
];

exports.read_todoEvent = function(req, res, next) {

};

exports.update_todoEvent = function(req, res, next) {

};

exports.delete_todoEvent = function(req, res, next) {
  event.findByIdAndRemove().exec();
};
