var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var screenshotSchema = new Schema({
        _id: Number,
        path_thumbnail: String,
        path_full: String,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Screenshot", screenshotSchema);
};
