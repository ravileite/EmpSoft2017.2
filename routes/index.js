var express = require('express');
var router = express.Router();
var analyse = require('../modules/analyse');

/* GET home page. */
router.post('/analyse', function(req, res, next) {
    var body = req.body;
    var data = analyse.formData(body.data);

    console.log(data);

    res.status(200).json(data);
});

module.exports = router;
