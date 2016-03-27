var Movie = require('./movie');
var Genre = require('./genre');
var Screenshot = require('./screenshot');
require('./category')();
//require('screenshot');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
    var gameInfoSheme = new Schema({
        _id: Number,
        appid: String,
        type: String,
        name: String,
        steam_appid: String,
        required_age: Number,
        is_free: Boolean,
        dlc:   {
            type: [Number],
            default: null
        },
        detailed_description: String,
        about_the_game: String,
        supported_languages: String,
        header_image: String,
        website: String,
        pc_requirements: {
            minimum: {
                type: String,
                default: null
            },
            recommended: {
                type: String,
                default: null
            }
        },
        mac_requirements: {
            minimum: {
                type: String,
                default: null
            },
            recommended: {
                type: String,
                default: null
            }
        },
        linux_requirements: {
            minimum: {
                type: String,
                default: null
            },
            recommended: {
                type: String,
                default: null
            }
        },
        developers: [String],
        publishers: [String],
        demos: {
            appid: String,
            description: String,
            required: false
        },
        price_overview: {
            currency: Number,
            initial: Number,
            final: Number,
            discount_percent: Number
        },
        packages: [Number],
        /*package_groups: {
            name: String,
            title: String,
            description: String,
            selection_text: String,
            save_text: String,
            display_type: String,
            is_recurring_subscription: String,
        }*/
        platforms: {
            windows: Boolean,
            mac: Boolean,
            linux: Boolean
        },
        metacritic:{
            score: Number,
            url: String
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'category'
            }
        ],
        genres: [
            {
                type: Schema.Types.ObjectId,
                ref: 'genre'
            }
        ],
        screenshots: [
            {
                type: Schema.Types.ObjectId,
                ref: 'screenshoot'
            }
        ],
        movies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'movie'
            }
        ],
        recommendations: {
            total: Number
        },
        achievements : {
            total: Number,
        },
        release_date: {
            coming_soon: Boolean,
            date: Date,
        },
        support_info: {
            url: String,
            email: String
        },
        background: String,
        _game : {
            type: Number,
            ref: 'Game'
        }

    });
    mongoose.model("GameInfo", gameInfoSheme);
};
