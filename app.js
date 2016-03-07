var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handler = {};
handler["/getAllGames"] = requestHandlers.LoadAllGamesInfo;
handler["/getGameInfo"] = requestHandlers.LoadGameInfoById;

server.start(router.route, handler);
