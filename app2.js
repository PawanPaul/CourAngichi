(function () {
    'use strict';

    angular.module('LunchMenu', [])
    .controller('LunchCon', function($scope){
        $scope.orderitem = "";
        $scope.output = "";
        $scope.order = function (){
            if($scope.orderitem==""){
                $scope.output = "Please enter data!";

            }
            else {
                let listItems = $scope.orderitem.split(',').filter(value => value.trim().length!=0);
               if (listItems.length <= 3) {
                $scope.output = 'Enjoy!';
                 }
               else {
                $scope.output = 'Too much!';
                 }      
            }
        }

    });

})();