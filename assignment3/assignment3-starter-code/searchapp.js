(function(){
    'use strict';
    angular.module('searcher',searcher)
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',foundItems);
    NarrowItDownController.$inject=['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var sysc = this;
        sysc.found={};
        var promise= MenuSearchService.getMatchedMenuItems();
    }
    function MenuSearchService(){
        var service = this;
        service.getMatchedMenuItems= function(searchTerm){
            $http({
                url:"https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then

        }
    }

    function foundItems({
        var ddo={
            templateUrl: 'loader/itemsloaderindicator.template.html'
        },
        return ddo;
    })
})();