var express = require('express');
var router = express.Router();
var analyse = require('../modules/analyse');
var Data = require('../model/data');

/* GET home page. */
router.post('/analyse', function(req, res, next) {
    var body = req.body;
    console.log(body);
    var percent = analyse.formData(body.percent);

    data.save(function(err){
        if(err){
            return res.status(500).send('Err');
        }else{
            res.status(200).send('Data saved.')
        }
    });

    res.status(200).json(data);
});

module.exports = router;
