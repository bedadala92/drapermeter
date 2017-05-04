var draperMeter = angular.module('draperMeter',['ngRoute']);

//configuring routes
draperMeter.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'html/views/main.html',
    controller: 'MainController'
  })

  .when('/novelty',{
    templateUrl: 'html/views/novelty.html',
    controller: 'NoveltyController'
  })

  .when('/elaboration',{
    templateUrl: 'html/views/elaboration.html',
    controller: 'ElaborationController'
  })

  .when('/style',{
    templateUrl: 'html/views/style.html',
    controller: 'StyleController.html'
  })

  .otherwise({
    redirectTo: '/'
  });
});

draperMeter.controller('mainController', function($scope) {

  $scope.message = 'Everyone come and see how i look';

});

draperMeter.controller('noveltyController', function($scope){
  $scope.message = 'This is the novelty page';
});

draperMeter.controller('elaborationController', function($scope){
  $scope.message = 'This is the elaboration page';
});

draperMeter.controller('styleController', function($scope){
  $scope.message = 'This is the style page';
});
