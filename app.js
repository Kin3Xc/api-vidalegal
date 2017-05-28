var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var api = require('./api');
var jwt = require('jwt-simple');
var cors = require('cors');
var multer  = require('multer');
var fs = require('fs');

// Get string in POST requests and convert it to an object
app.use(bodyParser.urlencoded({ extended: false, limit:'50mb' }));
app.use(bodyParser.json({limit:'50mb'}));
app.use(cors()); // Enable Cors

// upload image temporal
app.use(multer({ dest: './uploads'}));

// Set Up routes
app.use('/api/v1/', api);
app.use('/', express.static(__dirname + '/public'));

// Main Page
app.get('/', function (req, res) {
  res.send('Api Vida Legal');
});

// start server
var port = process.env.PORT || 8080;
app.listen(port);
