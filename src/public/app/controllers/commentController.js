'use strict';
app.controller('commentController', ['$scope', '$routeParams', 'commentService', 'gameService',
    function ($scope, $routeParams, commentService, gameService) {
         var gameId = $routeParams.gameId;
         $scope.gameName = $routeParams.gameName;

         LoadComments(gameId);

        function LoadComments(gameId){
            commentService.getCommentsForGame(gameId).then(function(result){
                $scope.comments = result;
            });
        };

         $scope.addComment = addComment;

         function addComment(comment){
             comment.gameInfoId = gameId;
             commentService.addNewComment(comment).then(function(result){
                 LoadComments(gameId);
             });
         };
    }]);
