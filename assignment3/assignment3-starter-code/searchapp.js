(function(){
    'use strict';
    angular.module('searcher',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearch',MenuSearchService)  
    .directive('foundItems',foundItems)
    function NarrowItDownController(){
        var sysc = this;
        sysc.item = "Paul";
    }
    function foundItems(){
        var ddo={
            template:'Hello',
        };
        return ddo;
    }
})();