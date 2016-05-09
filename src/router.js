var express = require('express');
var GameLoader = require('./GameLoader');
var GameParser = require('./GameManager/gameParser');
var router = express.Router();

router.get('/AllGames', function(request, response){
	GameLoader.LoadAllGamesInfo(function(err,params){
		if(GameParser.ChekJson(params))
		{
			response.json(JSON.parse(params));
		}else{
			response.json(null);
		}
	});
});

router.get('/GameInfo', function(request, response){
	GameLoader.LoadGameInfoById(request.query.appid, function(err,params){
		if(GameParser.ChekJson(params))
		{
			response.json(JSON.parse(params));
		}else{
			response.json(null);
		}
	});
});

module.exports = router;
