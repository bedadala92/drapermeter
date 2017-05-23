var mongoose = require('mongoose'),
  Poll = mongoose.model('Polls');


exports.list_all_polls = function(req,res){
  Poll.find({}, function(err,poll){
    if(err)
      res.send(err);
    res.json(poll);
  });
};

exports.create_a_poll = function(req,res){
  console.log(req.body);
  var new_poll = new Poll(req.body);
  new_poll.save(function(err,task){
    if(err)
      res.send(err);
    res.json(Poll);
  });
};

exports.read_a_poll = function(req,res){
  Poll.findById(req.params.pollId, function(err,poll){
    if(err)
      res.send(err);
    res.json(Poll);
  });
};
