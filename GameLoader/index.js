var http = require('http');
var StringDecoder = require('string_decoder').StringDecoder;

function GamesInfoLoader() {
  this.getGameInfoUrl = 'http://store.steampowered.com/api/appdetails';
  this.getAllGamesUrl = 'http://api.steampowered.com/ISteamApps/GetAppList/v2/';
}

GamesInfoLoader.prototype.LoadGameInfoById = function (appId, callback) {
  http.get(this.getGameInfoUrl + '?appids=' + appId, (response) => {
    var body = '';
    var decoder = new StringDecoder('utf8');
    response.on('data', function (chunk) {
      body += decoder.write(chunk);
    });
    response.on('end', function () {
      callback(body);
    });

  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
};

GamesInfoLoader.prototype.LoadAllGamesInfo = function(callback){
  http.get(this.getAllGamesUrl, (response) => {
    var body = '';
    var decoder = new StringDecoder('utf8');
    response.on('data', function(chunk){
      body += decoder.write(chunk);
    });
    response.on('end', function(){
      callback(body);
    });
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
};

exports.GamesInfoLoader = GamesInfoLoader;
