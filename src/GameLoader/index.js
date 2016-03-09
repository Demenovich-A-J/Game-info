var http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

function GamesInfoLoader() {
    this.GameInfoUrl = 'http://store.steampowered.com/api/appdetails';
    this.AllGamesUrl = 'http://api.steampowered.com/ISteamApps/GetAppList/v2';
}

GamesInfoLoader.prototype.Load = function (path,callback) {
    var body = [];
    http.get(path, (response) => {
        response.on('data', function(chunk) {
            body.push(chunk);
        });

        response.on('end', function() {
            console.log('well done');
            body = Buffer.concat(body).toString();
            callback(body);
        });
    });
};

GamesInfoLoader.prototype.LoadGameInfoById = function(appId, callback) {
    var path = this.GameInfoUrl + '?appids=' + appId;
    this.Load(path, callback);
};

GamesInfoLoader.prototype.LoadAllGamesInfo = function(callback) {
    var path = this.AllGamesUrl;
    console.log(path);
    this.Load(path, callback);
};

exports.GamesInfoLoader = GamesInfoLoader;
