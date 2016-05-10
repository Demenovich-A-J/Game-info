'use strict';
app.controller('gameDetailesController', ['$scope', '$routeParams', '$sce', 'gameService',
    function ($scope, $routeParams, $sce, gameService) {
        var gameId = $routeParams.gameId;

        gameService.getGameDetailes(gameId).then(function(result){
            if(result[0]._id){
                $scope.game = result[0];
            }
            else {
                $scope.game = undefined;
            }
        });

        $scope.getHtml = function(html){
            return $sce.trustAsHtml(html);
        };
    }
]);
