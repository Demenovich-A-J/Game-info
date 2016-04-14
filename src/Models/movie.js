var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movie = new Schema({
    movieId: String,
    name: String,
    thumbnail: String,
    480: String,
    max: String,
    highlight: Boolean,
    _gameInfo : {
        type: Number,
        ref: 'GameInfo'
    }
});

var Movie = mongoose.model('Movie', movie);
module.exports = Movie;
