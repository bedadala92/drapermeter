(function(){
  "use strict";

  module.exports = function(server){
    var pollList = require('../controllers/PollController');

  server.route('/polls')
    .get(pollList.list_all_polls)
    .post(pollList.create_a_poll);

  server.route('/polls/:pollId')
    .get(pollList.read_a_poll);
  };
})();
