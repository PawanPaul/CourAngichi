(function(){
  'use strict';
  angular.module('shopapp',[])
  .controller('sysctrl',function($scope){
        $scope.name = "Cookie";
        $scope.quantity = 5;
  });
})();