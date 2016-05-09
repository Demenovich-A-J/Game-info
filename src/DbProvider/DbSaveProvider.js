var Mapper = require('../Mapper/modelmapper');

var GameInfo = require('../Models/game-info');
var Category = require('../Models/category');
var Genre = require('../Models/genre');
var Movie = require('../Models/movie');
var Screenshot = require('../Models/screenshot');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function DbSaveProvider() {}

DbSaveProvider.prototype.SaveGameInfo = function (jsonObject){

      GameInfo.findOne({steam_appid : jsonObject.data.steam_appid},function (err, doc) {
            if (err) console.log(err);
            if(doc){
                //UpdateExistGame(doc,jsonObject)

                if('screenshoots' in doc){
                    console.log(doc.screenshoots);
                }
            }else{
                SaveNewGame(jsonObject);
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
    gameInfo.save(function (err, movie) {
        if (err) console.error(err);
    });
}

function UpdateExistGame(game,jsonObject) {
    var genreList = [];

    if('genres' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.genres.length; i++) {
            var genre = Mapper.MappGenre(jsonObject.data.genres[i]);
            Genre.find({genreId : genre.genreId}, function (err, docs) {
               if (docs.length){
                   genreList.push(docs._id);
               }else{
                   genre.save(function (err, genre) {
                       genreList.push(genre._id);
                       if (err) console.error(err);
                   });
               }
           });
       }
    }


   var categoryList = [];
   if('categories' in jsonObject.data){
       for (var i = 0; i < jsonObject.data.categories.length; i++) {
           var category = Mapper.MappCategory(jsonObject.data.categories[i]);
           Category.find({categoryId : category.categoryId}, function (err, docs) {
              if (docs.length){
                  categoryList.push(docs._id);
              }else{
                  category.save(function (err, category) {
                      categoryList.push(category._id);
                      if (err) console.error(err);
                  });
              }
          });
       }
   }

    var screenshotList = [];
    if('screenshots' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.screenshots.length; i++) {
            var screenshot = Mapper.MappScreenshot(jsonObject.data.screenshots[i]);
            screenshot.save(function (err, screenshot) {
                screenshotList.push(screenshot._id);
                if (err) console.error(err);
            });
        }
    }

    var movieList = [];
    if('movies' in jsonObject.data){
        for (var i = 0; i < jsonObject.data.movies.length; i++) {
            var movie = Mapper.MappScreenshot(jsonObject.data.movies[i]);
            movie.save(function (err, movie) {
                movieList.push(movie._id);
                if (err) console.error(err);
            });
        }
    }

    var gameInfo = Mapper.MappGameInfo(jsonObject);
    gameInfo.movies = movieList;
    gameInfo.screenshots = screenshotList;
    gameInfo.categories = categoryList;
    gameInfo.genres = genreList;
    gameInfo.save(function (err, movie) {
        if (err) console.error(err);
    });
}

module.exports = new DbSaveProvider();
