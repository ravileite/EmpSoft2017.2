var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    porcentagem: {type: String},
    litros: {type: String}
});


module.exports = mongoose.model('data', schema);