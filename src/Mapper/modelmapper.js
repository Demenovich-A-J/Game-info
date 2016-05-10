var GameInfo = require('../Models/game-info');
var Movie = require('../Models/movie');
var Category = require('../Models/category');
var Screenshot = require('../Models/screenshot');
var Genre = require('../Models/genre');
var Comment = require('../Models/comment');


function ModelMapper() {}

ModelMapper.prototype.MappGameInfo = function(item) {
    var gameInfo = new GameInfo(
        {
            appid: item.appid,
            type: item.data.type,
            name: item.data.name,
            steam_appid: item.data.steam_appid,
            required_age: item.data.required_age,
            is_free: item.data.is_free,
            dlc: item.data.dlc,
            detailed_description: item.data.detailed_description,
            about_the_game: item.data.about_the_game,
            supported_languages: item.data.supported_languages,
            header_image: item.data.header_image,
            website: item.data.website,
            pc_requirements: {
                minimum: item.data.pc_requirements.minimum,
                recommended: item.data.pc_requirements.recommended
            },
            mac_requirements: {
                minimum: item.data.mac_requirements.minimum,
                recommended: item.data.mac_requirements.recommended
            },
            linux_requirements: {
                minimum: item.data.linux_requirements.minimum,
                recommended: item.data.linux_requirements.recommended
            },
            developers: item.data.developers,
            publishers: item.data.publishers,
            demos: item.data.demos,
            price_overview: item.data.price_overview,
            packages: item.data.packages,
            platforms: item.data.platforms,
            metacritic: item.data.metacritic,
            recommendations: item.data.recommendations,
            achievements : item.data.achievements,
            release_date: item.data.release_date,
            support_info: item.data.support_info,
            background: item.data.background,

        }
    );

    return gameInfo;
};

ModelMapper.prototype.MappMovie = function(item) {
    var movie = new Movie(
        {
            name: item.name,
            thumbnail: item.thumbnail,
            480: item['480'],
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
    var genre = Genre(
        {
            genreId: item.id,
            description: item.description,
        }
    );

    return genre;
};

ModelMapper.prototype.MappComment = function(item) {
    console.log(item);
    var comment = Comment(
        {
            name: item.name,
            description: item.description,
            gameInfoId: item.gameInfoId
        }
    );
    console.log(comment);
    return comment;
};

ModelMapper.prototype.MappScreenshot = function(item) {
    var screenshot = new Screenshot(
        {
            path_thumbnail: item.path_thumbnail,
            path_full: item.path_full,
        }
    );

    return screenshot;
};

module.exports = new ModelMapper();

/*exports.ModelMapper = new ModelMapper();
module.exports = GameInfo;
module.exports = Movie;
module.exports = Category;
module.exports = Genre;
module.exports = Screenshot;
*/
