(function () {
    'use strict';

    angular.module('MyFirstProperApp', [])
    .controller('FirstController', function($scope){
     $scope.name ="Paul";
     $scope.Greetings = function () {
         var greet = "It is a pleasure to meet you";
         return greet
     }
    });

})();
(function () {
    'use strict';

    angular.module('NameCalc', [])
    .controller('CalcCon', function($scope){
        $scope.name = "";
        $scope.value = 0;
        $scope.NumDis = function(){
            var totNV = stringnumcalc($scope.name);
            $scope.value = totNV;
        }

        function stringnumcalc(string){
            var val = 0;
        for(var i=0;i<string.length;i++){
            val += string.charCodeAt(i);
        }
        return val
       }
    });