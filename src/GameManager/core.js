var http = require("http");
var Mapper = require('../Mapper/modelmapper');
var dbConnection = require('../data-base-connector');
var GameLoader = require('../GameLoader');
var GameParser = require('./gameParser');
var Scheduler = require('./scheduler');

var Core = function() {
}

var GameInfo = require('../Models/game-info');
var Category = require('../Models/category');
var Genre = require('../Models/genre');
var Movie = require('../Models/movie');
var Screenshot = require('../Models/screenshot');

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
        GameParser.ParseGameInfo(params,id, saveToDbmodel);
    });
}

function saveToDbmodel(jsonObject) {
    console.log(jsonObject.success);
    if(jsonObject != null){
        if(jsonObject.success){
            var genreList = [];
            for (var i = 0; i < jsonObject.data.genres.length; i++) {
                var genre = Mapper.MappGenre(jsonObject.data.genres[i]);

                genre.save(function (err, genre) {
                  if (err) return console.error(err);
                });
                genreList.push(genre);
            }
            console.log(genreList);
        }
    }
}

//exports.Core = Core;
module.exports = new Core();
