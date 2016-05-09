var express = require('express');
var GameLoader = require('./GameLoader');
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
    res.redirect('/index.html');
});

router.get('/AllGames', function(request, response){
	var page = request.query.page - 1;
	GameLoader.LoadAllGamesInfo(function(params){
		var appsList = (JSON.parse(params)).applist.apps;

		var responseData = {
			apps : appsList.slice(page*10, (page*10)+10),
			pages: appsList.length % 10 == 0 ? appsList.length / 10 : ((appsList.length - appsList.length%10) / 10)+1
		};

		response.json(responseData);
	});
});

router.get('/GameInfo', function(request, response){
	GameLoader.LoadGameInfoById(request.query.appid, function(params){
		response.json(JSON.parse(params));
	});
});

module.exports = router;
