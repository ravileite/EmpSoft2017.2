var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/alo', function(req, res, next) {
  res.send('e ai, ravi!');
});

module.exports = router;
