'use strict';
app.controller('gameDetailesController', ['$scope', '$routeParams', 'gameService',
    function ($scope, $routeParams, gameService) {
         var gameId = $routeParams.gameId;

         gameService.getGameDetailes(gameId).then(function(result){
             if(result[0]._id){
                 $scope.game = result[0];
             }
             else {
                 $scope.game = undefined;
             }
         });
    }]);
