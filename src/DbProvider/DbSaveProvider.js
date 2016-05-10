var Mapper = require('../Mapper/modelmapper');

var GameInfo = require('../Models/game-info');
var Category = require('../Models/category');
var Genre = require('../Models/genre');
var Movie = require('../Models/movie');
var Screenshot = require('../Models/screenshot');
var Comment = require('../Models/comment');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function DbSaveProvider() {}

DbSaveProvider.prototype.SaveGameInfo = function (jsonObject){

      GameInfo.findOne({steam_appid : jsonObject.data.steam_appid},function (err, doc) {
            if (err) console.log(err);
            if(doc){
                UpdateExistGame(doc,jsonObject)
            }else{
                SaveNewGame(jsonObject);
            }
        });
}

DbSaveProvider.prototype.SaveComment = function (jsonObject){

      GameInfo.findOne({ _id : jsonObject._id },function (err, doc) {
            if (err)  console.log(err);
            console.log(jsonObject);
            var comment = Mapper.MappComment(jsonObject);

            if(doc){
                doc.modifiedOn = Date.now();
                doc.save(function (err,doc) {
                    if (err)  console.log(err);
                })
            }else{
                comment.createdOn = Date.now();
                comment.modifiedOn = Date.now();
                console.log(comment);
                comment.save(function (err,comment) {
                    if (err)  console.log(err);
                })
            }
        });
}


function SaveNewGame(jsonObject) {
    var gameInfo = Mapper.MappGameInfo(jsonObject);

    var genreList = [];
    if('genres' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.genres.length; i++) {
            var genre = Mapper.MappGenre(jsonObject.data.genres[i]);
            gameInfo.genres.push(genre);
       }
    }


   var categoryList = [];
   if('categories' in jsonObject.data){
       for (var i = 0; i < jsonObject.data.categories.length; i++) {
           var category = Mapper.MappCategory(jsonObject.data.categories[i]);
           gameInfo.categories.push(category);
       }
   }

    var screenshotList = [];
    if('screenshots' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.screenshots.length; i++) {
            var screenshot = Mapper.MappScreenshot(jsonObject.data.screenshots[i]);
            gameInfo.screenshoots.push(screenshot);
        }
    }

    var movieList = [];
    if('movies' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.movies.length; i++) {
            var movie = Mapper.MappScreenshot(jsonObject.data.movies[i]);
            gameInfo.movies.push(movie);
        }
    }

    //gameInfo.movies = movieList;
    //gameInfo.screenshots = screenshotList;
    //gameInfo.categories = categoryList;
    //gameInfo.genres = genreList;
    gameInfo.save(function (err, gameInfo) {
        if (err) console.error(err);
    });
}

function UpdateExistGame(game,jsonObject) {
    var gameInfo = Mapper.MappGameInfo(jsonObject);

    GameInfo.find({ _id : game._id }).remove().exec();

    if('genres' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.genres.length; i++) {
            var genre = Mapper.MappGenre(jsonObject.data.genres[i]);
            gameInfo.genres.push(genre);
       }
    }


   if('categories' in jsonObject.data){
       for (var i = 0; i < jsonObject.data.categories.length; i++) {
           var category = Mapper.MappCategory(jsonObject.data.categories[i]);
           gameInfo.categories.push(category);
       }
   }

    if('screenshots' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.screenshots.length; i++) {
            var screenshot = Mapper.MappScreenshot(jsonObject.data.screenshots[i]);
            gameInfo.screenshoots.push(screenshot);
        }
    }

    if('movies' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.movies.length; i++) {
            var movie = Mapper.MappScreenshot(jsonObject.data.movies[i]);
            gameInfo.movies.push(movie);
        }
    }

    gameInfo.save(function (err, gameInfo) {
        if (err) console.error(err);
    });
}

module.exports = new DbSaveProvider();
