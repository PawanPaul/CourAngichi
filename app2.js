(function () {
    'use strict';

    angular.module('LunchMenu', [])
    .controller('LunchCon', function($scope){
        $scope.orderitem ="";
        $scope.orderlist = [];
        var end = 0;
        var count = 0;
        $scope.cusHTML = "";
        $scope.ender = function(){
            var thx = "";
         if(end>0&&count<4)
         {
         thx = "Enjoy your meal!";
         }
         else if(count>3)
         {
             thx = "Too Much!"
         }
         return thx
        }
        $scope.end = function (){
            end++;
        }
        $scope.order = function (){
            if($scope.orderitem==""){
                $scope.cusHTML = $scope.cusHTML+"Please input data!";
            }
            else if(count<3){
            count++;
            $scope.orderlist[count] = $scope.orderitem;
            $scope.cusHTML = $scope.cusHTML+count+") "+$scope.orderitem+" ";
            }
            else{
                count++;
            }
        }
    });

})();