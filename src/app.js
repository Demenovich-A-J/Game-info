var express = require('express');
var router = require('./router');
var Core = require('./GameManager/core');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.use(express.static(__dirname + '/public'));

/*
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
