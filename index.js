var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongodb
mongoose.connect('mongodb://localhost/drapermeter');
mongoose.Promise = global.Promise;

//initialize body-parser
server.use(bodyParser.json());

// initialize routes
server.use('/api',require('./routes/api'));

//config files
var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;


server.use(express.static(__dirname+'/public'));

server.get('/', function(request,response){
  response.sendFile('index.html',{root:__dirname+'/public/html'});
});

server.listen(port, function(){
  console.log('Now listening on port', port);
});


// server.use(function(err,req,res,next){
//   if(!err) return next();
//   console.log(err.stack);
//   res.json({error:true});
// });
