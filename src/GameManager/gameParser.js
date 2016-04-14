
GameParser = function() {
}

GameParser.prototype.ParseGameInfo = function (object,id, callback){
    if (/^[\],:{}\s]*$/.test(object.replace(/\\["\\\/bfnrtu]/g, '@').
                        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        callback(JSON.parse(object)[id]);
    }else{
        callback(null);
    }
};

//exports.GamesInfoLoader = GamesInfoLoader;
module.exports = new GameParser();
