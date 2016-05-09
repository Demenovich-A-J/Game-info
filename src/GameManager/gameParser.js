
GameParser = function() {
}

GameParser.prototype.ParseGameInfo = function (json,id, callback){
    if (this.ChekJson(json)) {
        callback(id,JSON.parse(json)[id]);
    }else{
        callback(id,null);
    }
};

GameParser.prototype.ChekJson = function (json) {
    if (/^[\],:{}\s]*$/.test(json.replace(/\\["\\\/bfnrtu]/g, '@').
                        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    }else{
        return false;
    }
}

//exports.GamesInfoLoader = GamesInfoLoader;
module.exports = new GameParser();
