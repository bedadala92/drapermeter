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

draperMeter.controller('pollController', function($scope, $http, $rootScope) {

  $scope.submitAns = function ()
  {
    var slider = document.getElementsByClassName("currentSlider")[0];
     console.log(slider.noUiSlider.get());

  };
  // var origins;
  // var qnumber = 1;
  // $('#qnum').text(qnumber);
  //
  // var nextAngle=0;
  // var reduceAngle =0;
  //
  // var items = $('.sliders');
  // var currentItem = items.filter('.currentSlider');
  // currentItem.css('background-color','#464646');
  // items.each(function(){
  //   var item = $(this);
  //     item[0].setAttribute('disabled',true);
  //     currentItem.removeAttr("disabled");
  // });
  //
  //
  //
  //   $('#next').on('click',function(){
  //     currentItem.css('background-color','#D6D7D9');
  //     var nextItem = currentItem.next();
  //     currentItem.removeClass('.currentSlider');
  //
  //     if(nextItem.length){
  //       currentItem = nextItem.addClass('.currentSlider');
  //       currentItem.css('background-color','#464646');
  //       items.each(function(){
  //         var item = $(this);
  //           item[0].setAttribute('disabled',true);
  //           currentItem.removeAttr("disabled");
  //       });
  //     } else {
  //       currentItem = items.first().addClass('.currentSlider');
  //     }
  //       nextAngle += 6;
  //       reduceAngle -= 6;
  //     // console.log(nextAngle);
  //     $('.circle_container').rotate({animateTo: nextAngle});
  //     $('.sliders').rotate({animateTo:reduceAngle});
  //     $('#choice').rotate({animateTo:reduceAngle});
  //     qnumber = qnumber+1;
  //     $('#qnum').text(qnumber);
  //
  //     $('.current').removeClass('current').hide()
  //       .next().show().addClass('current');
  //     if($('.current').hasClass('last')){
  //       $('#next').attr('disabled',true);
  //     }
  //     $('#back').attr('disabled', null);
  //     });
  //
  //   $('#back').on("click",function() {
  //     currentItem.css('background-color','#D6D7D9');
  //     var nextItem = currentItem.prev();
  //
  //     currentItem.removeClass('.currentSlider');
  //     if(nextItem.length){
  //       currentItem = nextItem.addClass('.currentSlider');
  //       currentItem.css('background-color','#464646');
  //       items.each(function(){
  //         var item = $(this);
  //           item[0].setAttribute('disabled',true);
  //           currentItem.removeAttr("disabled");
  //       });
  //     } else {
  //       currentItem = items.first().addClass('.currentSlider');
  //     }
  //     nextAngle -= 6;
  //     reduceAngle += 6;
  //     $('.circle_container').rotate({animateTo:nextAngle});
  //     $('.sliders').rotate({animateTo:reduceAngle});
  //     $('#choice').rotate({animateTo:reduceAngle});
  //
  //     qnumber = qnumber-1;
  //     $('#qnum').text(qnumber);
  //
  //     $('.current').removeClass('current').hide()
  //         .prev().show().addClass('current');
  //     if ($('.current').hasClass('first')) {
  //         $('#back').attr('disabled', true);
  //     }
  //     $('#next').attr('disabled', null);
  //
  // });
  //
  // $(document).ready(function(){
  //   // debugger;
  //   var range_all_sliders = {
  //     'min': ['SD'],
  //     '25%': ['D'],
  //     '50%': ['N'],
  //     '75%': ['SA'],
  //     'max': ['A']
  //   };
  // //code for snapping slider
  // var sliders = document.getElementsByClassName('sliders');
  // for(var i =0; i<sliders.length; i++){
  //   noUiSlider.create(sliders[i], {
  //     start: [3],
  //     pips: {
  //       mode: 'values',
  //       values:[1,2,3,4,5],
  //       density: 4
  //     },
  //     step: 1,
  //     orientation:"horizontal",
  //     range:{
  //       'min':[1],
  //       'max': [5]
  //     }
  //   });
  // }
  //
  //
  // //code to change color of the marker on drag
  // $('#choice').text('Neutral');
  // $("#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9,#s10").each(function(){
  //   // console.log(this.noUiSlider.get());
  //   this.noUiSlider.on('update',function(values,handle){
  //     // console.log("Hello"+this.id);
  //     // console.log(values[handle]);
  //     if(values[handle] == '1.00'){
  //       // $('.noUi-marker-large').css('background-color','yellow');
  //       $('#choice').text('Strongly Disagree');
  //     } else if(values[handle] == '2.00'){
  //       $('#choice').text('Disagree');
  //     } else if(values[handle] == '3.00'){
  //       $('#choice').text('Neutral');
  //     } else if(values[handle] == '4.00'){
  //       $('#choice').text('Agree');
  //     } else if(values[handle] == '5.00'){
  //       $('#choice').text('Strongly Agree');
  //     }
  //   });
  // });
  //
  //
  // //code for position each slider around a circle
  // var numItems = $(".circle_container .sliders").length;
  // var start = 0;
  // var step = (2*Math.PI)/numItems;
  // $(".circle_container .sliders").each(function(index){
  //   var radius = ($(".circle_container").width() - $(this).width())/2;
  //   var tmpTop = (($(".circle_container").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
  //   var tmpLeft = (($(".circle_container").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
  //   start += step;
  //
  //   $(this).css("top",tmpTop);
  //   $(this).css("left",tmpLeft);
  //   // $(this).css('transform','rotate('+90+'deg)');
  // });
  //
  //
  // $(".submit").on('click', function(){
  //   //debugger;
  //   var slider = document.getElementById('s1');
  //   console.log(slider.noUiSlider.get());
  //   console.log($scope);
  // })
  //
  //
  // var qnumber = 1;
  // $('#qnum').text(qnumber);
  //
  //
  // });

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
      // console.log('Error: ' + data);
    });

  $scope.createPoll = function(){
    $http.post('/polls', $scope.formData)
      .success(function(data){
        $scope.polls = $scope.formData;
        console.log($scope.formData);
      })
      .error(function(data){
        // console.log('Error: ' + data);
      });

  };
});
