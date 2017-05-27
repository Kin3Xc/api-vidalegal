var express = require('express');
var app = express();

var config = require('../config/config');
var mongoose = require('mongoose');

// Validate that the user token it is valid
var jwt = require('jwt-simple');
var config = require('../config/config');
var moment = require('moment');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 
mongoose.Promise = global.Promise;

mongoose.connect(config.connection,options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {console.log("Great success!")});

var service = require ('./service');
var type = require ('./typeService');

app.use('/services', service);
app.use('/types', type);

app.get('/', function (req, res) {
  res.send('Please use a valid model');
})


module.exports = app;
