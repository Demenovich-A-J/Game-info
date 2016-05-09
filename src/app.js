var express = require('express');
var router = require('./router');
var Core = require('./GameManager/core');

var app = express();

app.use('/', router);
app.use(express.static(__dirname + '/public'));

/*console.log("step1");

var CronJob = require('cron').CronJob;

var job = new CronJob(new Date(), function() {
    console.log("start");
  }, function () {
      Core.FillDb();
  },
  false,
  'America/Los_Angeles'
);
job.start();*/


app.listen(8888);
