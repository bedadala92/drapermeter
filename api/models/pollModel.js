var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  choice: String
});

//mongoose model name is Polls
module.exports = mongoose.model('Polls', PollSchema);
//first argument is the singular name of the collection that will
//be created for your model and the second argument is the schema youw
//want to use in creating your model
