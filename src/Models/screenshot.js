module.exports = function(mongoose) {
    var screenshotSchema = new mongoose.Schema({
        path_thumbnail: String,
        path_full: String,
        _gameInfo : {
            type: Number,
            ref: 'GameInfo'
        }
    });
    mongoose.model("Screenshot", screenshotSchema);
};
