// The route handling the main page
var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TODO MANAGER'});
});

module.exports = router;
