// module.exports = {
//   mongoURI : 'mongodb://<bedadala92>:<its@May14>@ds139791.mlab.com:39791/drapermeter'
// };

//configuring the database
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://<bedadala92>:<its@May14>@ds139791.mlab.com:39791/drapermeter', function(err){
  if(err){
    // console.log('Failed connecting to MongoDB!');
    return console.error(err);
  }
  else{
    console.log('Successfully connected to mongo');
  }
});
