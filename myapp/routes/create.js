var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController.js');

router.get('/', res.render('create'));

router.post('/', eventController.create_todoEvent);

module.exports = router;
