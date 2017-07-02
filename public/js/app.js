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

    .state('sliders',{
      // abstract: true,
      url: '/sliders',
      templateUrl: 'html/views/partial-sliders.html'
    })

    .state('sliders.ad1',{
      // abstract: true,
      url: '/sliders',
      templateUrl: 'html/views/partial-sliders-ad1.html',
      controller: 'Controller1'
      // params:{
      //   id:null
      // }
    })

    .state('sliders.ad2',{
      // abstract: true,
      url: '/sliders',
      templateUrl: 'html/views/partial-sliders-ad2.html',
      controller: 'Controller2'
    })

    .state('sliders.ad3',{
      // abstract: true,
      url: '/sliders',
      templateUrl: 'html/views/partial-sliders-ad3.html',
      controller: 'Controller3'
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

draperMeter.controller('Controller1',function($rootScope, $state, $stateParams){
  console.log($state.current.name);
  // $state.go('sliders.ad1',{id:"ad1"});
  $rootScope.id = $state.current.name;
  $rootScope.nextPage = function(target){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
     $state.go('sliders.ad2');

  };
  $rootScope.prevPage = function(target){
     $state.go('sliders.ad1');
  };
});
draperMeter.controller('Controller2',function($rootScope, $state){
  console.log($state.current.name);
  $rootScope.id = $state.current.name;
  $rootScope.nextPage = function(target){
     $state.go('sliders.ad3');

  };
  $rootScope.prevPage = function(target){
     $state.go('sliders.ad1');
  };
});
draperMeter.controller('Controller3',function($rootScope, $state){
  console.log($state.current.name);
  $rootScope.id = $state.current.name;
  $rootScope.nextPage = function(target){
     $state.go('sliders.ad3');

  };
  $rootScope.prevPage = function(target){
     $state.go('sliders.ad2');
  };
});

draperMeter.controller('pollController', function($scope, $http, $rootScope, $state) {

  $scope.init = function () {
    $scope.gender = "male";
    $scope.ageArray = ["18-24", "25-34", "35-44", "45 and older"];
    $scope.age = $scope.ageArray[0];
  };
  $scope.adNames = {
    "sliders.ad1" : "AD 1",
    "sliders.ad2" : "AD 2",
    "sliders.ad3" : "AD 3"
  };
  $scope.finalAnswers = {
    'AD 1' : { s1 : 0.0,
                        s2 : 0.0,
                        s3 : 0.0,
                        s4 : 0.0,
                        s5 : 0.0,
                        s6 : 0.0,
                        s7 : 0.0,
                        s8 : 0.0,
                        s9 : 0.0
                    } ,
    'AD 2' : { s1 : 0.0,
                        s2 : 0.0,
                        s3 : 0.0,
                        s4 : 0.0,
                        s5 : 0.0,
                        s6 : 0.0,
                        s7 : 0.0,
                        s8 : 0.0,
                        s9 : 0.0
                    } ,
    'AD 3' : { s1 : 0.0,
                        s2 : 0.0,
                        s3 : 0.0,
                        s4 : 0.0,
                        s5 : 0.0,
                        s6 : 0.0,
                        s7 : 0.0,
                        s8 : 0.0,
                        s9 : 0.0
                    } ,
  };
  $http.get('/polls')
    .success(function(data){
      $scope.polls = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

$scope.getCurrentState = function () {
  return $state.current.name;
}
    $scope.submitAdAns = function() {
      console.log($scope.gender);
      for(i=1;i<10;i++){
        var slider = document.getElementById("s"+i);
        var currentAd = $state.current.name;

        $scope.finalAnswers[$scope.adNames[currentAd]][slider.id] = slider.noUiSlider.get();
      }
    }
  $scope.submitAns = function()
  {
    // var ads = {
    //   "sliders.ad1" : ""
    // }
    for(i=1;i<10;i++){
      var slider = document.getElementById("s"+i);
      var currentAd = $state.current.name;

      $scope.finalAnswers[$scope.adNames[currentAd]][slider.id] = slider.noUiSlider.get();
    }

    // var finalData = {
    //   "Gender" : $scope.gender,
    //   "age" : $scope.age,
    //   $scope.finalAnswers.gender
    // }

    $scope.finalAnswers.Gender = $scope.gender;
    $scope.finalAnswers.age = $scope.age;

    console.log($scope.finalAnswers);
    $http.post('/polls', $scope.finalAnswers)
      .success(function(){
        //$scope.polls = $scope.finalAnswers;
        console.log("Hello");
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
    //   //console.log($scope.finalAnswers);
    // var slider = document.getElementsByClassName("currentSlider")[0];
    // var currentAd = $state.current.name;
    //  $scope.finalAnswers[currentAd][slider.id] = slider.noUiSlider.get();
    //  console.log($scope.finalAnswers);
  };


//   $scope.formData = {};
//
//
// $scope.RadioChange = function(value){
//   value = $scope.formData;
//     console.log(value);
//     for(i=1; i<4;i++){
//       if(value.group1 == "agree_"+i || value.group2 == "agree_"+i ||value.group3 == "agree_"+i){
//         console.log('you clicked agree');
//         $("#A2").css("visibility", "visible");
//         $("#A1").css("visibility", "hidden");
//         $("#A3").css("visibility", "hidden");
//         $("#A4").css("visibility", "hidden");
//         $("#A5").css("visibility", "hidden");
//         }
//         else if(value.group1 == "strong_agree_"+i || value.group2 == "strong_agree_"+i || value.group3 == "strong_agree_"+i){
//           console.log('you clicked strongly agree');
//           $("#A3").css("visibility", "visible");
//           $("#A1").css("visibility", "hidden");
//           $("#A2").css("visibility", "hidden");
//           $("#A4").css("visibility", "hidden");
//           $("#A5").css("visibility", "hidden");
//         }
//         else if(value.group1 == "disagree_"+i || value.group2 == "disagree_"+i || value.group3 == "disagree_"+i){
//           console.log('you clicked disagree');
//           $("#A4").css("visibility", "visible");
//           $("#A1").css("visibility", "hidden");
//           $("#A2").css("visibility", "hidden");
//           $("#A3").css("visibility", "hidden");
//           $("#A5").css("visibility", "hidden");
//         }
//         else if(value.group1 == "strong_disagree_"+i || value.group2 == "strong_disagree_"+i || value.group3 == "strong_disagree_"+i){
//           console.log('you clicked strongly disagree');
//           $("#A5").css("visibility", "visible");
//           $("#A1").css("visibility", "hidden");
//           $("#A2").css("visibility", "hidden");
//           $("#A3").css("visibility", "hidden");
//           $("#A4").css("visibility", "hidden");
//         }
//         else if(value.group1 == "neutral_"+i || value.group2 == "neutral_"+i || value.group3 == "neutral_"+i){
//           console.log('you clicked neutral');
//           $("#A1").css("visibility", "visible");
//           $("#A2").css("visibility", "hidden");
//           $("#A3").css("visibility", "hidden");
//           $("#A4").css("visibility", "hidden");
//           $("#A5").css("visibility", "hidden");
//         }
//     }
//
// };

  $http.get('/polls')
    .success(function(data){
      $scope.polls = data;
      // console.log(data);
    })
    .error(function(data){
      // console.log('Error: ' + data);
    });
});
