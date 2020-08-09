(function () {
    'use script';

    angular.module('MyFirstProperApp', [])
    .controller('FirstController', function($scope){
     $scope.name ="Paul";
     $scope.Greetings = function () {
         var greet = "It is a pleasure to meet you";
         return greet
     }
    });

})();