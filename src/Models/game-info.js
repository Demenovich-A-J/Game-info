var Genre = require('./genre');
var Screenshot = require('./screenshot');
var Movie = require('./movie');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameInfo = new Schema({
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
        currency: String,
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        }
    ],
    genres: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'genre'
        }
    ],
    screenshots: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'screenshoot'
        }
    ],
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
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
    background: String
});

var GameInfo = mongoose.model('GameInfo', gameInfo);
module.exports = GameInfo;
