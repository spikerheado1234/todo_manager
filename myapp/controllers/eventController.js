var event = require('../models/todoEventModel.js');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Enables the creation of a todo event.
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

// Enables the update of a todo event.
exports.update_todoEvent = function(req, res, next) {
  event.findById(req.params.id, function(err, result) {
    result.set({ event: req.body.update_event});
    result.save();
  });
  event.find().then(function(information) {
    res.render('index', {title: 'TODO MANAGER', items: information});
  });
};

// Enables the deletion of a todo event.
exports.delete_todoEvent = function(req, res, next) {
  event.findByIdAndRemove({_id: req.params.id }).exec();
  res.redirect('index');
};
