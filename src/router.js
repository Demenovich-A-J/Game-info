var express = require('express');
var GameLoader = require('./GameLoader');
var router = express.Router();

router.get('/AllGames', function(request, response){
	GameLoader.LoadAllGamesInfo(function(params){
		response.json(JSON.parse(params));
	});
});

router.get('/GameInfo', function(request, response){
	GameLoader.LoadGameInfoById(request.query.appid, function(params){
		response.json(JSON.parse(params));
	});
});

module.exports = router;
