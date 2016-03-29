var express = require('express');
var router = require('./router');
var dbConnection = require('./data-base-connector');
require('./models').initialize();
var Game = dbConnection.model('Game');
var GameInfo = dbConnection.model('GameInfo');
var Movie = dbConnection.model('Movie');
var Category = dbConnection.model('Category');
var Genre = dbConnection.model('Genre');
var Screenshot = dbConnection.model('Screenshot');
var gameLoader = require('./GameLoader');
var GameLoader = new gameLoader.GamesInfoLoader();

var app = express();
app.use('/', router);
console.log("step1");

var CronJob = require('cron').CronJob;
var s = 0;
var job = new CronJob('*/5 * * * * *', function() {
    var g = "";
    Game.find({}, function(error, data){
        var timeout = 0;
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i].appid  + ":" + i + "\n" + i);
            var id = "";

                setTimeout(function() {
                    console.log(i);
                    GameLoader.LoadGameInfoById(i, function(params){
                        if (/^[\],:{}\s]*$/.test(params.replace(/\\["\\\/bfnrtu]/g, '@').
                                            replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                                            replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                            var info = JSON.parse(params);
                            console.log(info[i].success);
                            if(info[i].success){
                                console.log(info[i].data.name);
                                if(info[i].data.categories){
                                    for (var j = 0; j < info[i].data.categories.length; j++) {
                                        var category = new Category(
                                            {
                                                categoryId: info[i].data.categories[j].id,
                                                description: info[i].data.categories[j].description
                                            }
                                        );
                                        category.save(function (err,category) {
                                          if (err) return handleError(err);
                                          // saved!
                                        })

                                    }
                                }
                            }
                        }
                    });
                }, timeout );
                timeout += 5000;
                continue;
        }
    });


  }, function () {
      console.log("done2");
  },
  true
);


app.listen(8888);
job.start();
