var dbConnection = require('../data-base-connector');
var Game = dbConnection.model('Game');
var GameInfo = dbConnection.model('GameInfo');
var Movie = dbConnection.model('Movie');
var Category = dbConnection.model('Category');
var Genre = dbConnection.model('Genre');
var Screenshot = dbConnection.model('Screenshot');

function ModelMapper() {}

ModelMapper.prototype.MappGame = function(item) {
    var game = new Game(
        {
            name: games.applist.apps[i].name,
            appid: games.applist.apps[i].appid
        }
    );

    return game;
};

ModelMapper.prototype.MappGameInfo = function(item) {
    var gameInfo = new GameInfo(
        //
    );

    return gameInfo;
};

ModelMapper.prototype.MappMovie = function(item) {
    var movie = new Movie(
        //
    );

    return movie;
};

ModelMapper.prototype.MappCategory = function(item) {
    var сategory = new Category(
        //
    );

    return сategory;
};

ModelMapper.prototype.MappGenre = function(item) {
    var genre = new Genre(
        //Screenshot
    );

    return genre;
};

ModelMapper.prototype.MappScreenshot = function(item) {
    var screenshot = new Screenshot(
        //Screenshot
    );

    return screenshot;
};

exports.ModelMapper = new ModelMapper();
module.exports = Game;
module.exports = GameInfo;
module.exports = Movie;
module.exports = Category;
module.exports = Genre;
module.exports = Screenshot;
