// Routes to handle the delete page.
var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
var events = require('../models/todoEventModel');

// Handles the get request when user clicks on a todo event.
router.get('/:id', function(req, res) {
  events.findById(req.params.id, function(err, todo) {
    if (err) {
      res.render('error');
    } else {
      res.render('delete', { data: todo});
    }
  });
  }
);

// Handles the delete request when the user clicks the delete button. 
router.delete('/:id', eventController.delete_todoEvent);

module.exports = router;
