var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var genreSchema = new Schema({
        _id: Number,
        genreId: Number,
        description: String,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Genre", genreSchema);
};
