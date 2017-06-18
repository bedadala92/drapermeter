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

    .state('info',{
      // abstract: true,
      url: '/info',
      templateUrl: 'html/views/partial-info.html'
    })

    .state('poll',{
      abstract: true,
      url: '/poll',
      templateUrl: 'html/views/partial-poll.html'
    })
    // nested views
    .state('poll.ad1', {
      abstract: true,
      url: '/ad1',
      templateUrl: 'html/views/partial-poll-ad1.html'
    })
    .state('poll.ad1.novelty', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad1-novelty.html'
    })
    .state('poll.ad1.elaboration', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad1-elaboration.html'
    })
    .state('poll.ad1.style', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad1-style.html'
    })
    .state('poll.ad2', {
      abstract:true,
      url: '/ad2',
      templateUrl: 'html/views/partial-poll-ad2.html'
    })
    .state('poll.ad2.novelty', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad2-novelty.html'
    })
    .state('poll.ad2.elaboration', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad2-elaboration.html'
    })
    .state('poll.ad2.style', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad2-style.html'
    })
    .state('poll.ad3', {
      abstract: true,
      url: '/ad3',
      templateUrl: 'html/views/partial-poll-ad3.html'
    })
    .state('poll.ad3.novelty', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad3-novelty.html'
    })
    .state('poll.ad3.elaboration', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad3-elaboration.html'
    })
    .state('poll.ad3.style', {
      url: '',
      templateUrl: 'html/views/partial-poll-ad3-style.html'
    });
});

draperMeter.controller('pollController', function($scope, $http) {



  $scope.formData = {};


$scope.RadioChange = function(value){
  value = $scope.formData;
    console.log(value);
    for(i=1; i<4;i++){
      if(value.group1 == "agree_"+i || value.group2 == "agree_"+i ||value.group3 == "agree_"+i){
        console.log('you clicked agree');
        $("#A2").css("visibility", "visible");
        $("#A1").css("visibility", "hidden");
        $("#A3").css("visibility", "hidden");
        $("#A4").css("visibility", "hidden");
        $("#A5").css("visibility", "hidden");
        }
        else if(value.group1 == "strong_agree_"+i || value.group2 == "strong_agree_"+i || value.group3 == "strong_agree_"+i){
          console.log('you clicked strongly agree');
          $("#A3").css("visibility", "visible");
          $("#A1").css("visibility", "hidden");
          $("#A2").css("visibility", "hidden");
          $("#A4").css("visibility", "hidden");
          $("#A5").css("visibility", "hidden");
        }
        else if(value.group1 == "disagree_"+i || value.group2 == "disagree_"+i || value.group3 == "disagree_"+i){
          console.log('you clicked disagree');
          $("#A4").css("visibility", "visible");
          $("#A1").css("visibility", "hidden");
          $("#A2").css("visibility", "hidden");
          $("#A3").css("visibility", "hidden");
          $("#A5").css("visibility", "hidden");
        }
        else if(value.group1 == "strong_disagree_"+i || value.group2 == "strong_disagree_"+i || value.group3 == "strong_disagree_"+i){
          console.log('you clicked strongly disagree');
          $("#A5").css("visibility", "visible");
          $("#A1").css("visibility", "hidden");
          $("#A2").css("visibility", "hidden");
          $("#A3").css("visibility", "hidden");
          $("#A4").css("visibility", "hidden");
        }
        else if(value.group1 == "neutral_"+i || value.group2 == "neutral_"+i || value.group3 == "neutral_"+i){
          console.log('you clicked neutral');
          $("#A1").css("visibility", "visible");
          $("#A2").css("visibility", "hidden");
          $("#A3").css("visibility", "hidden");
          $("#A4").css("visibility", "hidden");
          $("#A5").css("visibility", "hidden");
        }
    }

};
  // rvalue = $scope.formData;
  // if(rvalue == "sagree"){
  //   $scope.getElementById('A2').style.visibility = visible;
  // }

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
        $scope.polls = $scope.formData;
        console.log($scope.formData);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });

  };
});
