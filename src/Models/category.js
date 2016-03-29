var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var categoryShema = new Schema({
        categoryId: String,
        description: String,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Category", categoryShema);

};
