var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genre = new Schema({
    genreId: Number,
    description: String,
    _gameInfo : {
        type: Number,
        ref: 'GameInfo'
    }
});

var Genre = mongoose.model('Genre', genre);
module.exports = Genre;
