'use strict';
app.factory('gameService', ['$http', function ($http, ngGameInfoSettings) {

    var gamesServiceFactory = {};

    var _getAllGames = function (page) {
        return $http.get('AllGames?page=' + page).then(function (results) {
            return results.data;
        });
    };

    var _getGameDetailes = function(id){
        return $http.get('GameInfo?appid=' + id).then(function (results) {
            return results.data;
        });
    };

    gamesServiceFactory.getAllGames = _getAllGames;
    gamesServiceFactory.getGameDetailes = _getGameDetailes;

    return gamesServiceFactory;
}]);
