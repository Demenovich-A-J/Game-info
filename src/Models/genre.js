module.exports = function(mongoose) {
    var genreSchema = new mongoose.Schema({
        _id: Number,
        genreId: Number,
        description: String,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Genre", genreSchema);
};
