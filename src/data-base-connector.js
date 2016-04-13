var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GameInfo');
require('./models').initialize(mongoose);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

module.exports = db;
