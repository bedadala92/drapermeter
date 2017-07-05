var express = require('express');
var server = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');
var fs = require('fs');

require ('./database/db.js');
var Poll = require('./Models/pollSchema.js');

server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vnd.api+json'}));
server.get('/polls',function(req,res){
  Poll.find(function(err,polls){
    if(err){
      res.send(err);
    }
    else{
      console.log(polls[0]);
      res.send(polls);
    }
  });
});
server.post('/polls', function(req,res){
  console.log(req.body);
  var Poll = mongoose.model("Poll");
  var newPoll = new Poll(req.body);
  console.log(newPoll);
  var $pollCreated = newPoll.save();
  $pollCreated.then(function(err,polls){
    if(err){
      res.send(err);
    }
  });

});

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = router;


//initialize body-parser
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

// initialize routes
// var routes = require('./api/routes/pollRoutes.js');
// routes(server);

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
