/* creating our app and injecting ui-router */
var draperMeter = angular.module('draperMeter', ['ui.router','ngAnimate']);

/* configuring our routes */
draperMeter.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home',{
      url: '/home',
      templateUrl: 'html/views/partial-home.html'
    })

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

  $scope.formData = {};

  $http.get('/polls')
    .success(function(data){
      $scope.polls = data;
      // console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

  $scope.createPoll = function(){
    $http.post('/polls', $scope.formData)
      .success(function(data){
        $scope.formData ={};
        $scope.todos = data;
        alert("poll added " + data);
        // $http.get(h)
      });
      error(function(data){
        console.log('Error: ' + data);
      });

  };
});
