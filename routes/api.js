var express = require('express');
var router = express.Router();
var Poll = require('../models/polls.js');

//Get the list of all the polls from database
router.get('/polls', function(req,res){
  res.send({type: 'GET'});
});

// create a new poll to the database
router.post('/polls', function(req,res){
  // var poll = new Poll(req.body);
  // poll.save();
  Poll.create(req.body).then(function(poll){
    res.send(poll);
  }); //This does the task of the above two lines
});

//update an existing poll in the database
router.put('/polls/:id', function(req,res){
  res.send({type: 'PUT'});
});

//delete a poll from the database
router.delete('/polls/:id', function(req,res){
  res.send({type: 'DELETE'});
});

module.exports = router;
