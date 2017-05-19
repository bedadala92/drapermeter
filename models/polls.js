var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({ ip: 'String' });
var choiceSchema = new mongoose.Schema({
  text: String,
  votes:[voteSchema]
});

//create Polls Schema and Model
var PollSchema = new mongoose.Schema({
  question:{
    type: String,
    required: true
  },
  choices: [choiceSchema]
});

//Creates a collection called Poll that will have poll objects of the type we defined in PollSchema
var Poll = mongoose.model('poll',PollSchema);
module.exports = Poll;
