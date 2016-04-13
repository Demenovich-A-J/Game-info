var dbConnection = require('../data-base-connector');
var Game = dbConnection.model('Game');
var GameInfo = dbConnection.model('GameInfo');
var Movie = dbConnection.model('Movie');
var Category = dbConnection.model('Category');
var Genre = dbConnection.model('Genre');
var Screenshot = dbConnection.model('Screenshot');

function ModelMapper() {}

ModelMapper.prototype.MappGameInfo = function(item) {
    var gameInfo = new GameInfo(
        appid: item.appid,
        type: item.type,
        name: item.name,
        steam_appid: item.steam_appid,
        required_age: item.required_age,
        is_free: item.is_free,
        dlc: item.dlc,
        detailed_description: item.detailed_description,
        about_the_game: item.about_the_game,
        supported_languages: item.supported_languages,
        header_image: item.header_image,
        website: item.website,
        pc_requirements: {
            minimum: item.pc_requirements.minimum,
            recommended: item.pc_requirements.recommended
        },
        mac_requirements: {
            minimum: item.mac_requirements.minimum,
            recommended: item.mac_requirements.recommended
        },
        linux_requirements: {
            minimum: item.linux_requirements.minimum,
            recommended: item.linux_requirements.recommended
        },
        developers: item.developers,
        publishers: item.publishers,
        demos: item.demos,
        price_overview: item.price_overview,
        packages: item.packages,
        platforms: item.platforms,
        metacritic: item.metacritic,
        recommendations: item.recommendations,
        achievements : item.achievements,
        release_date: item.release_date,
        support_info: item.support_info,
        background: item.background
    );

    return gameInfo;
};

ModelMapper.prototype.MappMovie = function(item) {
    var movie = new Movie(
        {
            name: item.name,
            thumbnail: item.thumbnail,
            480: item.'480',
            max: item.max,
            highlight: item.highlight,
        }
    );

    return movie;
};

ModelMapper.prototype.MappCategory = function(item) {
    var сategory = new Category(
        {
            categoryId: item.categoryId,
            description: item.description
        }
    );

    return сategory;
};

ModelMapper.prototype.MappGenre = function(item) {
    var genre = new Genre(
        description: item.description,
    );

    return genre;
};

ModelMapper.prototype.MappScreenshot = function(item) {
    var screenshot = new Screenshot(
        path_thumbnail: item.path_thumbnail,
        path_full: item.path_full,
    );

    return screenshot;
};

exports.ModelMapper = new ModelMapper();
module.exports = GameInfo;
module.exports = Movie;
module.exports = Category;
module.exports = Genre;
module.exports = Screenshot;
