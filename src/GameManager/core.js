var http = require("http");
//var mapper = require('../Mapper/modelmapper');
var dbConnection = require('../data-base-connector');
var GameLoader = require('../GameLoader');
var GameParser = require('./gameParser');
var Scheduler = require('./scheduler');
var Core = function() {
}

var GameInfo = dbConnection.model('GameInfo');

Core.prototype.FillDb = function() {
    GameLoader.LoadAllGamesInfo(this.ProcessGamesResponse);
}

Core.prototype.ProcessGamesResponse = function  (object){
    var games = JSON.parse(object).applist.apps;
    for (var i = 0; i < games.length; i++) {
        Scheduler.AddNewTask(games[i].appid,proccesGameInfo);
    }
    Scheduler.ResetDelay();
}

function proccesGameInfo(id) {
    console.log(id);
    GameLoader.LoadGameInfoById(id, function(params) {
        var gameInfo = GameParser.ParseGameInfo(params,id);
        saveToDbmodel(gameInfo);
    });
}

function saveToDbmodel(jsonObject) {
    console.log(jsonObject.success)
    if(jsonObject.success)
    {
        console.log(jsonObject.data.genres);
    }
}

//exports.Core = Core;
module.exports = new Core();
