var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var screenshot = new Schema({
    path_thumbnail: String,
    path_full: String,
    _gameInfo : {
        type: Number,
        ref: 'GameInfo'
    }
});

var Screenshot = mongoose.model('Screenshot', screenshot);
module.exports = Screenshot;
