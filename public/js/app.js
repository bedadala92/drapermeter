var draperMeter = angular.module('draperMeter',['ui.router']);

draperMeter.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/main');

  $stateProvider

    .state('main', {
      url: '/main',
      templateUrl: 'html/views/partial-main.html'
    })

    .state('adpage',{
      url:'/adpage',
      templateUrl: 'html/views/partial-adpage.html',
    })

    //nested views
    .state('adpage.home',{
      url: '/home',
      templateUrl: 'html/views/partial-adpage-home.html',
      controller: 'PollListCtrl'
    })

    .state('adpage.home.poll',{
      url: '/home/poll',
      templateUrl :'html/views/partial'
    })

    .state('adpage.about',{
      url: '/about',
      templateUrl: 'html/views/partial-adpage-about.html'
    });

});

draperMeter.controller('mainController', function($scope) {

  $scope.message = 'Everyone come and see how i look';

});
