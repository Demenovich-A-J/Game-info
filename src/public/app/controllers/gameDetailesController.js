'use strict';
app.controller('gameDetailesController', ['$scope', '$routeParams', 'gameService',
    function ($scope, $routeParams, gameService) {
         var gameId = $routeParams.gameId;

         gameService.getGameDetailes(gameId).then(function(result){
             if(result[gameId].success){
                 $scope.game = result[gameId].data;
             }
             else {
                 $scope.game = undefined;
             }
         });
    }]);
