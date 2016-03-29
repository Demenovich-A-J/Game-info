var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var gameShema = new Schema({
        name: {
            type: String,
            required: true
        },
        appid: {
            type: String,
            required: true
        },
        gameInfo : {
            type: Schema.Types.ObjectId,
            ref: 'GameInfo'
        }
    });
    mongoose.model('Game', gameShema);
};
