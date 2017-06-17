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
    // .state('info.novelty',{
    //   url: '',
    //   templateUrl: 'html/views/partial-info-novelty.html'
    // })
    // .state('info.elaboration',{
    //   url: '',
    //   templateUrl: 'html/views/partial-info-elaboration.html'
    // })
    // .state('info.style',{
    //   url: '',
    //   templateUrl: 'html/views/partial-info-style.html'
    // })

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

// $(document).ready(function(){
//   $('input[type=radio][name=likert]').change(function(){
//     if($scope.formData.value == 'strong_agree'){
//       console.log("Strongly Agree");
//     }
//     else if ($scope.formData.value == 'agree'){
//       console.log("Agree");
//     }
//   });
// });

$scope.RadioChange = function(value){
    value = $scope.formData;
    console.log(value);
    if(value.choice == "agree"){
      $("#A2").css("visibility", "visible");
      $("#A1").css("visibility", "hidden");
      $("#A3").css("visibility", "hidden");
      $("#A4").css("visibility", "hidden");
      $("#A5").css("visibility", "hidden");
      }
      else if(value.choice == "sagree"){
        $("#A3").css("visibility", "visible");
        $("#A1").css("visibility", "hidden");
        $("#A2").css("visibility", "hidden");
        $("#A4").css("visibility", "hidden");
        $("#A5").css("visibility", "hidden");
      }
      else if(value.choice == "disagree"){
        $("#A4").css("visibility", "visible");
        $("#A1").css("visibility", "hidden");
        $("#A2").css("visibility", "hidden");
        $("#A3").css("visibility", "hidden");
        $("#A5").css("visibility", "hidden");
      }
      else if(value.choice == "sdisagree"){
        $("#A5").css("visibility", "visible");
        $("#A1").css("visibility", "hidden");
        $("#A2").css("visibility", "hidden");
        $("#A3").css("visibility", "hidden");
        $("#A4").css("visibility", "hidden");
      }
      else if(value.choice == "neutral"){
        $("#A1").css("visibility", "visible");
        $("#A2").css("visibility", "hidden");
        $("#A3").css("visibility", "hidden");
        $("#A4").css("visibility", "hidden");
        $("#A5").css("visibility", "hidden");
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
        // console.log($scope.formData);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });

  };
});
