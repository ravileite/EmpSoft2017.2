var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    data: {type: String}
});

module.exports = mongoose.model('data', schema);