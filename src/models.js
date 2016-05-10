var models = ['./Models/game-info', './Models/movie', './Models/category', './Models/screenshot', './Models/comment'];

exports.initialize = function(mongoose) {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require(models[i])(mongoose);
    }
};
