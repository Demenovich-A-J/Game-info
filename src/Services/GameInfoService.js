var dbConnection = require('../data-base-connector');
var Comment = require('../Models/comment');
var Mapper = require('../Mapper/modelmapper');
var DbSaveProvider = require('../DbProvider/DbSaveProvider');

function GameInfoService() {}

GameInfoService.prototype.GetById = function(callback,id) {
    Comment.
        find({ _id : id}).
        exec(callback);
};

GameInfoService.prototype.GetBySteamAppId = function(callback,id) {
    Comment.
        find({ steam_appid : id}).
        exec(callback);
};

module.exports = new GameInfoService();
