var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment = new Schema({
    name: String,
    description: String,
    createdOn: Date,
    modifiedOn: Date,
    gameInfoId: mongoose.Schema.Types.ObjectId
});

var Category = mongoose.model('Comment', comment);
module.exports = comment;
