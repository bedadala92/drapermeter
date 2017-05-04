var express = require('express');
var server = express();
var bodyParser = require('body-parser');

//config files
// var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;


server.use(express.static(__dirname+'/public'));

server.get('/', function(request,response){
  response.sendFile('index.html',{root:__dirname+'/public/html'});
});

server.listen(port, function(){
  console.log('Noe listening on port', port);
});