var express = require('express');
var server = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');
var fs = require('fs');
var Poll = require('./api/models/pollModel.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = router;

//connect to mongodb
// if(env === 'development'){
//   mongoose.connect('mongodb://localhost/drapermeter');
// } else {
//   mongoose.connect('mongodb://bedadala92:sandeep92@ds139791.mlab.com:39791/drapermeter');
// }
//
// mongoose.Promise = global.Promise;


//initialize body-parser
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// initialize routes
var routes = require('./api/routes/pollRoutes.js');
routes(server);

//config files
// var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));

server.get('/', function(request,response){
  response.sendFile('index.html',{root:__dirname});
});

server.listen(port, function(){
  console.log('Now listening for requests on port', port);
});
