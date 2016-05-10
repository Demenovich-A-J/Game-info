var http = require("http");
var dbConnection = require('../data-base-connector');
var GameLoader = require('../GameLoader');
var GameParser = require('./gameParser');
var Scheduler = require('./scheduler');

var DbSaveProvider = require('../DbProvider/DbSaveProvider');
var Core = function() {
}

Core.prototype.FillDb = function() {
    GameLoader.LoadAllGamesInfo(this.ProcessGamesResponse);
}

Core.prototype.ProcessGamesResponse = function  (err,object){
    var games = JSON.parse(object).applist.apps;
    for (var i = 0; i < games.length; i++) {
        Scheduler.AddNewTask(games[i].appid,proccesGameInfo);
    }
    Scheduler.ResetDelay();
}

function proccesGameInfo(id) {
    GameLoader.LoadGameInfoById(id, function(err,params) {
        if(err == null){
            GameParser.ParseGameInfo(params,id, saveToDbmodel);
        }
    });
}

function saveToDbmodel(id,jsonObject) {
    if(jsonObject != null){
        if(jsonObject.success){
            DbSaveProvider.SaveGameInfo(jsonObject);
        }
    }
}
module.exports = new Core();
