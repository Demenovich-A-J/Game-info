var models = ['./Models/game-info', './Models/genre', './Models/movie', './Models/category', './Models/screenshot'];

exports.initialize = function(mongoose) {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require(models[i])(mongoose);
    }
};
