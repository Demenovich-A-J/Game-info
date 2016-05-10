var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comment = new Schema({
    name: String,
    description: String,
    createdOn: Date,
    modifiedOn: Date,
    gameInfoId: String
});

var Comment = mongoose.model('Comment', comment);
module.exports = Comment;
