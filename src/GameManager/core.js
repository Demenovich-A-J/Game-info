var http = require("http");
var Mapper = require('../Mapper/modelmapper');
var dbConnection = require('../data-base-connector');
var GameLoader = require('../GameLoader');
var GameParser = require('./gameParser');
var Scheduler = require('./scheduler');

var DbSaveProvider = require('../DbProvider/DbSaveProvider');

var Core = function() {
}

/*var GameInfo = require('../Models/game-info');
var Category = require('../Models/category');
var Genre = require('../Models/genre');
var Movie = require('../Models/movie');
var Screenshot = require('../Models/screenshot');*/

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
            DbSaveProvider.SaveGameInfo(jsonObject);
            /*var genreList = [];
            for (var i = 0; i < jsonObject.data.genres.length; i++) {
                var genre = Mapper.MappGenre(jsonObject.data.genres[i]);
                Genre.find({genreId : genre.genreId}, function (err, docs) {
                       if (docs.length){
                           genreList.push(docs._id);
                       }else{
                        genre.save(function (err, genre) {
                          genreList.push(genre._id);
                          if (err) return console.error(err);
                        });
                       }
                   });
               }

               var categoryList = [];
               if(jsonObject.data.categories != undefined){
                   for (var i = 0; i < jsonObject.data.categories.length; i++) {
                       var category = Mapper.MappCategory(jsonObject.data.categories[i]);
                       Category.find({categoryId : category.categoryId}, function (err, docs) {
                              if (docs.length){
                                  categoryList.push(docs._id);
                              }else{
                               category.save(function (err, category) {
                                   categoryList.push(category._id);
                                   if (err) return console.error(err);
                               });
                              }
                          });
                   }
               }

            var screenshotList = [];
            if(jsonObject.data.screenshots != undefined){
                for (var i = 0; i < jsonObject.data.screenshots.length; i++) {
                    var screenshot = Mapper.MappScreenshot(jsonObject.data.screenshots[i]);
                    screenshot.save(function (err, screenshot) {
                        screenshotList.push(screenshot._id);
                        if (err) return console.error(err);
                    });
                }
            }

            var movieList = [];
            if(jsonObject.data.movies != undefined){
                for (var i = 0; i < jsonObject.data.movies.length; i++) {
                    var movie = Mapper.MappScreenshot(jsonObject.data.movies[i]);
                    movie.save(function (err, movie) {
                        movie.push(screenshot._id);
                        if (err) return console.error(err);
                    });
                }
            }

            var gameInfo = Mapper.MappGameInfo(jsonObject);
            gameInfo.movies = movieList;
            gameInfo.screenshots = screenshotList;
            gameInfo.categories = categoryList;
            gameInfo.genres = genreList;
            gameInfo.save(function (err, movie) {
                if (err) return console.error(err);
            });*/
        }
    }
}
module.exports = new Core();
