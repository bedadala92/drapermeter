var express = require('express');
var server = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');
var fs = require('fs');
var Poll = require('./api/models/pollModel.js');

module.exports = router;

//connect to mongodb
mongoose.connect('mongodb://localhost/drapermeter');
mongoose.Promise = global.Promise;


//initialize body-parser
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// initialize routes
var routes = require('./api/routes/pollRoutes.js');
routes(server);

//config files
var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));

server.get('/', function(request,response){
  response.sendFile('index.html',{root:__dirname});
});

// server.listen(port, function(){
//   console.log('Now listening for requests on port', port);
// });
