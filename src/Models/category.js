var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = new Schema({
    categoryId: String,
    description: String,
    _gameInfo : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GameInfo'
    }
});

var Category = mongoose.model('Category', category);
module.exports = Category;
