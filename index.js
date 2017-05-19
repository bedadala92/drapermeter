var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost/drapermeter');
mongoose.Promise = global.Promise;




//initialize body-parser
server.use(bodyParser.urlencoded({extended: true}));
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
  console.log('Now listening for requests on port', port);
});

//error handling middleware
server.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

// server.use(function(err,req,res,next){
//   if(!err) return next();
//   console.log(err.stack);
//   res.json({error:true});
// });
