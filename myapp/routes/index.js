// The route handling the main page
var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController.js');
var event = require('../models/todoEventModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  event.find().then(function(err, data) {
    res.render('index', {title: "TODO MANAGER", items: data})
  });
});

module.exports = router;
