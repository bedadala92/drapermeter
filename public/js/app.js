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

draperMeter.controller('PollController', function($scope,$routeParams) {

  $scope.message = 'Everyone come and see how i look';

});
