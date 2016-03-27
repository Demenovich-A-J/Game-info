var express = require('express');
var router = require('./router');
var dbConnection = require('./data-base-connector');

require('./models.js').initialize();

var app = express();
app.use('/', router);

app.listen(8888);

console.log(dbConnection);

module.exports = app;
