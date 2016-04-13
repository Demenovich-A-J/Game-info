var express = require('express');
var router = require('./router');
var dbConnection = require('./data-base-connector');
require('./models').initialize();
var Game = dbConnection.model('Game');
var GameInfo = dbConnection.model('GameInfo');
var Movie = dbConnection.model('Movie');
var Category = dbConnection.model('Category');
var Genre = dbConnection.model('Genre');
var Screenshot = dbConnection.model('Screenshot');
var gameLoader = require('./GameLoader');
var GameLoader = new gameLoader.GamesInfoLoader();

var app = express();
app.use('/', router);
console.log("step1");


app.listen(8888);
job.start();
