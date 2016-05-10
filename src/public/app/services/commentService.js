'use strict';
app.factory('commentService', ['$http', function ($http, ngGameInfoSettings) {

    var commentsServiceFactory = {};

    var _getCommentsForGame = function (gameId) {
        return $http.get('Comments?appid=' + gameId).then(function (results) {
            console.log(results);
            return results.data;
        });
    };

    var _addNewComment = function(comment){
        var config = {
            headers : {
                'Content-Type': 'application/json'
            }
        };
        console.log(comment);
       return $http.post('AddComment', comment, config).then(function(result){
           return result.data;
       });
    };

    commentsServiceFactory.getCommentsForGame = _getCommentsForGame;
    commentsServiceFactory.addNewComment = _addNewComment;

    return commentsServiceFactory;
}]);
