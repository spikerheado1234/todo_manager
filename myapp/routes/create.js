// A route to handle creation of new events.
var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController.js');

router.get('/', function(req, res, next) {
  res.render('create');
  }
);

router.post('/', eventController.create_todoEvent);

module.exports = router;
