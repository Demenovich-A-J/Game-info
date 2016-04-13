
GameParser = function() {
}

GameParser.prototype.ParseGameInfo = function (object,id){
    if (/^[\],:{}\s]*$/.test(object.replace(/\\["\\\/bfnrtu]/g, '@').
                        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return JSON.parse(object)[id];
    }else{
        return null;
    }
};

//exports.GamesInfoLoader = GamesInfoLoader;
module.exports = new GameParser();
