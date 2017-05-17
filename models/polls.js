var mongoose = require('mongoose');
var Schema = new mongoose.Schema({ ip: 'String' });

//create Polls Schema and Model
var PollSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  }
});

//Creates a collection called Poll that will have poll objects of the type we defined in PollSchema
var Poll = mongoose.model('poll',PollSchema);

module.exports = Poll;
// exports.PollSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   choices: [choiceSchema]
// });
