module.exports = function(mongoose) {
        var categoryShema = new mongoose.Schema({
            categoryId: String,
            description: String,
            _gameInfo : {
                type: Number,
                ref: 'GameInfo'
            }
        });
        mongoose.model("Category", categoryShema);
}
