var models = ['./Models/game', './Models/game-info', './Models/genre', './Models/movie', './Models/category', './Models/screenshot'];

exports.initialize = function() {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require(models[i])();
    }
};
