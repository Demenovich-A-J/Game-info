'use strict';
app.directive('backImage',[function(){
    return function(scope, element, attrs){
        var url = attrs.backImage;
        element.css({
            'background-image': 'url(' + url +') 15%',
            'background-size' : 'cover'
        });
    };
}]);
