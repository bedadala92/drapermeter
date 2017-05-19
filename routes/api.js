var express = require('express');
var router = express.Router();
var Poll = require('../models/polls.js');

// // Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }

//Create JSON endpoints
// router.get('/polls', routes.list);
// router.get('/polls/:id', routes.poll);
// router.post('/polls', routes.create);

//Get the list of all the polls from database
router.get('/polls', function(req,res,next){
  res.send(poll);
});

router.get('/polls/:id', function(req,res,next){
  var pollId = req.params.id;
  Poll.findbYId(pollId, '', {lean:true}, function(err,poll){
    if(poll){
      var userVoted = false,
      userChoice,
      totalVotes = 0;
      for(var c in poll.choices){
        var choice = poll.choices[c];
        for(var v in choice.votes){
          var vote = choice.votes[v];
          totalVotes++;
          if(vote.ip === (req.header('x-forwarded-for')|| req.ip)){
            userVoted = true;
            userChoice = {_id: choice._id, text: choice.text};
          }
        }
      }
        poll.userVoted = userVoted;
        poll.userChoice = userChoice;
        poll.totalVotes = totalVotes;
        res.json(poll);
      } else {
        res.json({error:true});
      }
  });
});

// create a new poll to the database
router.post('/polls', function(req,res,next){
  var reqBody = req.body,
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    choices = reqBody.choices.filter(function(v){return v.text !== '';
  }),
    pollObj = {question: reqBody.question, choices: choices};
  var poll = new Poll(pollObj);
  poll.save(function(err,doc){
    if(err || !doc) {
      throw 'Error';
    } else {
      res.json(doc);
    }
});
});

//update an existing poll in the database
// router.put('/polls/:id', function(req,res,next){
//   // res.send({type: 'PUT'});
//   Poll.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
//     Poll.findOne({_id: req.params.id}).then(function(poll){
//       res.send(poll);
//     });
//     res.send(poll);
//   });
// });

//delete a poll from the database
// router.delete('/polls/:id', function(req,res,next){
//   Poll.findByIdAndRemove({_id: req.params.id}).then(function(poll){
//     res.send(poll);
//   });
//   console.log(req.params.id);
//   // res.send({type: 'DELETE'});
// });

module.exports = router;
