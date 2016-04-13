module.exports = function(mongoose) {
    var movieShema = new mongoose.Schema({
        movieId: String,
        name: String,
        thumbnail: String,
        480: String,
        max: String,
        highlight: Boolean,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Movie", movieShema);
};
