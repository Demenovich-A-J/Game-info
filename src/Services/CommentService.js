var dbConnection = require('../data-base-connector');
var Comment = require('../Models/comment');
var Mapper = require('../Mapper/modelmapper');
var DbSaveProvider = require('../DbProvider/DbSaveProvider');

function CommentService() {}


CommentService.prototype.Add = function(item) {
    DbSaveProvider.SaveComment(item);
};

CommentService.prototype.Edit = function(item) {
    DbSaveProvider.SaveComment(item);
};

CommentService.prototype.GetById = function(callback,id) {
    Comment.
        find({ _id : id}).
        sort({ createdOn: -1 }).
        exec(callback);
};

CommentService.prototype.GetByGameInfoId = function(callback,id) {
    Comment.
        find({ gameInfoId : id}).
        sort({ createdOn: -1 }).
        exec(callback);
};

module.exports = new CommentService();
