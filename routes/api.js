var express = require('express');
var router = express.Router();
var Poll = require('../models/polls.js');

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

//Get the list of all the polls from database
router.get('/polls', function(req,res){
  res.send({type: 'GET'});
});

// create a new poll to the database
router.post('/polls', function(req,res){
  var poll = req.body;
  poll.createDate = new Date();
  if(!(req.body.firstName || req.body.lastName)){
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }
  db.collection(POLLS_COLLECTION).insertOne(newContact, function(err,doc){
    if(err){
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
  // var poll = new Poll(req.body);
  // poll.save();
  // Poll.create(req.body).then(function(poll){
  //   res.send(poll);
  }); //This does the task of the above two lines
// });

//update an existing poll in the database
router.put('/polls/:id', function(req,res){
  res.send({type: 'PUT'});
});

//delete a poll from the database
router.delete('/polls/:id', function(req,res){
  res.send({type: 'DELETE'});
});

module.exports = router;
