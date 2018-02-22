var express = require('express');
var router = express.Router();
var event = require('../models/todoEventModel.js');
var eventController = require('../controllers/eventController');

router.get('/:id', function(req, res, next) {
  event.findById(req.params.id, function(err, data) {
    if (err) {
      res.render('error');
    } else {
      res.render('update', {title: "TODO MANAGER", item: data});
    }
  });
});

router.put(':/id', eventController.update_todoEvent);

module.exports = router;
