var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var screenshot = new Schema({
    path_thumbnail: String,
    path_full: String,
});

var Screenshot = mongoose.model('Screenshot', screenshot);
module.exports = Screenshot;
