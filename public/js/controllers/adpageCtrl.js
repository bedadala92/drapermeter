// (function(){
//   angular.module('draperMeter')
//          .controller('andPageCtrl', adPageCtrl);
//   adPageCtrl.$inject = [];
//
// })

/* Managing the polls list */
function PollListCtrl ($scope) {
  $scope.polls = [];
}

/* Voting/ Viewing the poll results */
function PollItemCtrl ($scope, $routeParams) {
  $scope.poll = {};
  $scope.vote = function() {};
}

/* Creating a new Poll */
function PollNewCtrl ($scope) {
  $scope.poll = {
    question: '',
    choices: [{text: ''}, {text: ''}, {text: ''}]
  };
  $scope.addChoice = function(){
    $scope. poll. choices. push ({text: ''});
  };
  $scope.createPoll = function(){};
}
