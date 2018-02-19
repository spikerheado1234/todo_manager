var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('delete', { title: "TODO MANAGER"});
});

module.exports = router;
