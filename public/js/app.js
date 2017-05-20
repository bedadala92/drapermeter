/* creating our app and injecting ui-router */
var draperMeter = angular.module('draperMeter', ['ui.router','ngAnimate']);

/* configuring our routes */
draperMeter.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/poll');

  $stateProvider

    .state('poll',{
      url: '/poll',
      templateUrl: 'html/views/partial-poll.html'
    })
    // nested views
    .state('poll.ad1', {
      url: '/ad1',
      templateUrl: 'html/views/partial-poll-ad1.html'
    })
    .state('poll.ad1.novelty', {
      url: '/novelty',
      templateUrl: 'html/views/partial-poll-ad1-novelty.html'
    })
    .state('poll.ad2', {
      url: '/ad2',
      templateUrl: 'html/views/partial-poll-ad2.html'
    })
    .state('poll.ad3', {
      url: '/ad3',
      templateUrl: 'html/views/partial-poll-ad3.html'
    });

});

draperMeter.controller('PollController', function($scope, $http) {

  $http.get('/polls')
    .success(function(result){
      $scope.polls = result;
      // console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.formData ={};
  $scope.createPoll = function(){
    var data = {choice: $scope.formData};
    $http.post('/polls', data)
      .success(function(data,status,headers){
        alert("poll added");
        // $http.get(h)
      });

  };
});
