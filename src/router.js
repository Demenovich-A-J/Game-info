var express = require('express');
var GameLoader = require('./GameLoader');
var GameParser = require('./GameManager/gameParser');
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
    res.redirect('/index.html');
});

router.get('/AllGames', function(request, response){
	var page = request.query.page - 1;
	GameLoader.LoadAllGamesInfo(function(err,params){
		if(GameParser.ChekJson(params))
		{
			var appsList = (JSON.parse(params)).applist.apps;

			var responseData = {
				apps : appsList.slice(page*10, (page*10)+10),
				pages: appsList.length % 10 == 0 ? appsList.length / 10 : ((appsList.length - appsList.length%10) / 10)+1
			};

			response.json(responseData);
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
