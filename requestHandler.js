var exec = require("child_process").exec;
var gamesInfoLoader = require("./GameLoader");
var url = require("url");
var GameInfoLoader = new gamesInfoLoader.GamesInfoLoader();

function loadGameInfoById(request, response) {
  var urlParsed = url.parse(request.url,true);
  GameInfoLoader.LoadGameInfoById(urlParsed.query.appid,function (params) {
    response.end(params);
  });
}

function loadAllGamesInfo(request,response) {
  GameInfoLoader.LoadAllGamesInfo(function (params) {
    response.end(params);
  });
}

exports.LoadGameInfoById = loadGameInfoById;
exports.LoadAllGamesInfo = loadAllGamesInfo;
