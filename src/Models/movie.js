var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var movieShema = new Schema({
        _id: Number,
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
    mongoose.model("Movie", movieShema);

};
