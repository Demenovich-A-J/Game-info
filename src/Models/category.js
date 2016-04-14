var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category = new Schema({
    categoryId: String,
    description: String,
    _gameInfo : {
        type: Number,
        ref: 'GameInfo'
    }
});

var Category = mongoose.model('Category', category);
module.exports = Category;
