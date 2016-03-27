var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var gameShema = new Schema({
        name: {
            type: String,
            required: true
        },
        appId: {
            type: String,
            required: true
        },
        gameInfo : {
            type: Schema.Types.ObjectId,
            ref: 'gameInfo'
        }
    });
    mongoose.model("Game", gameShema);
};
