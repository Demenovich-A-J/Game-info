var express = require('express');
var GameLoader = require('./GameLoader');
var GamesService = require('./Services/GameInfoService');
var CommentsService = require('./Services/CommentService');

var GameParser = require('./GameManager/gameParser');
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
    res.redirect('/index.html');
});

router.get('/AllGames', function(request, response){
	var page = request.query.page - 1;
    GamesService.GetAllGames(function(result){
        response.json(result);
    }, page);
});

router.get('/GameInfo', function(request, response){
    GamesService.GetById(function(err, result){
        response.json(result);
    }, request.query.appid);
});

router.get('/Comments', function(request, response){
    console.log(request.query.appid);
    CommentsService.GetByGameInfoId(function(err, result){
        response.json(result);
    }, request.query.appid);
});

router.post('/AddComment', function(request, response){
    CommentsService.Add(request.body);
    response.json();
});

module.exports = router;
