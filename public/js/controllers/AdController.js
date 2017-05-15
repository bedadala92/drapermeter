// function AdController($scope){
//   $scope.ad = [{
//     src: 'images/clios/gold/01.jpg'
//   }];
//
//   $scope.clickme = function() {
//   alert('This is parent controller "CarController" calling');
// };
//
// }

(function(){
  angular.module('draperMeter',[])
         .controller('AdController',function($scope){
           $scope.ad = "https://www.google.com/images/srpr/logo11w.png";
         });
       })
