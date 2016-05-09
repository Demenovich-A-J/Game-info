'use strict';
app.controller('allGamesController', ['$scope', 'gameService',
    function ($scope, gameService) {

        var pagesCount = 0;
        getGamesForPage(1);

        $scope.getGamesForPage = getGamesForPage;

        function getGamesForPage(page){
            gameService.getAllGames(page).then(function (result) {
                $scope.apps = result.apps;

                if(pagesCount !=  result.pages)
                {
                    pagesCount = result.pages;
                    initPagination(pagesCount);
                }
            });
        };

        function initPagination(pagesCount){
            $('#pagination').materializePagination({
                useUrlParameter: false,
                align: 'center',
                lastPage: pagesCount,
                onClickCallback: function(currentPage){
                    getGamesForPage(currentPage);
                }
            });
        };
    }]);
