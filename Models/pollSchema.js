var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({
  "Gender": String,
  "age" : String,

"AD 1": {
      s1: String,
      s2: String,
      s3: String,
      s4: String,
      s5: String,
      s6: String,
      s7: String,
      s8: String,
      s9: String
  },
  "AD 2": {
      s1: String,
      s2: String,
      s3: String,
      s4: String,
      s5: String,
      s6: String,
      s7: String,
      s8: String,
      s9: String
  },
  "AD 3": {
      s1: String,
      s2: String,
      s3: String,
      s4: String,
      s5: String,
      s6: String,
      s7: String,
      s8: String,
      s9: String
  },
});
module.exports = mongoose.model('Poll',pollSchema);
