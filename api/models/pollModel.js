var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  choice: String
});

//mongoose model name is Polls
module.exports = mongoose.model('Polls', PollSchema);
