var app = angular.module('GameInfoApp', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {

    $routeProvider.when("/games", {
        controller: "allGamesController",
        templateUrl: "app/views/allGames.html"
    });
    $routeProvider.when("/gameDetail/:gameId", {
        controller: "gameDetailesController",
        templateUrl: "app/views/gameDetail.html"
    });
    $routeProvider.when("/comments/:gameId/:gameName", {
        controller: "commentController",
        templateUrl: "app/views/comments.html"
    });
    $routeProvider.otherwise({ redirectTo: "/games" });

});

var serviceBase = 'http://localhost:8888/';
app.constant('ngGameInfoSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngGameInfoApp'
});
