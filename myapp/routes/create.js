// Routes to handle creation of new events.
var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController.js');

// Handles the get request to display the main page.
router.get('/', function(req, res, next) {
  res.render('create');
  }
);

// Handles the post request to create a new todo event.
router.post('/', eventController.create_todoEvent);

module.exports = router;
