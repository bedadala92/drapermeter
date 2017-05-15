//configuring the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drapermeter', function(err){
  if(err){
    console.log('Failed connecting to MongoDB!');
  } else{
    console.log('Successfully connected to mongo');
  }
});

var userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: {type: String, trim: true}
  },
  age: {type: Number, min:0 }
});

var PUser = mongoose.model('PowerUsers', userSchema);

PUser.remove({}, function(err){
  if(err){
    console.log('error deleting old data.');
  }
});

var johndoe = new PUser ({
  name: {first: 'John', last:'Doe'},
  age: 25
});

johndoe.save(function(err) {
  if(err){
    console.log('Errors on save!');
  }
});

var janedoe = new PUser ({
  name: { first: 'Jane', last: 'Doe' },
  age: 65
});
janedoe.save(function (err) {if (err) console.log ('Error on save!');});

var alicesmith = new PUser ({
  name: { first: 'Alice', last: 'Smith' },
  age: 45
});
alicesmith.save(function (err) {if (err) console.log ('Error on save!');});


// module.exports = {
//   mongoURI : 'mongodb://bedadala92:<its@May14>@ds139791.mlab.com:39791/drapermeter'
// };
