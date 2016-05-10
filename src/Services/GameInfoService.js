var dbConnection = require('../data-base-connector');
var Comment = require('../Models/comment');
var Mapper = require('../Mapper/modelmapper');
var DbSaveProvider = require('../DbProvider/DbSaveProvider');
var GameInfo = require('../Models/game-info');

var pageSize = 10;

function GameInfoService() {}

GameInfoService.prototype.GetById = function(callback,id) {
    GameInfo.
        find({ _id : id}).
        exec(callback);
};

GameInfoService.prototype.GetBySteamAppId = function(callback,id) {
    GameInfo.
        find({ steam_appid : id}).
        exec(callback);
};

GameInfoService.prototype.GetAllGames = function(callback,page) {
    GameInfo.find({}, 'name steam_appid', { skip: pageSize*page, limit: pageSize },
        function(err, models) {
            console.log(models);
            GameInfo.count({}, function(err, count){
                var responseData = {
    				apps : models,
    				pages: count % pageSize == 0 ? count / pageSize : ((count - count%pageSize) / pageSize)+1
    			};
                callback(responseData);
            });
        });
};

module.exports = new GameInfoService();
