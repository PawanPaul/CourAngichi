(function(){
    'use strict';
    angular.module('searcher',searcher)
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',foundItems);
    NarrowItDownController.$inject=['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var sysc = this;
        sysc.found=[];
        var promise= MenuSearchService.getMatchedMenuItems();
        promise.then
    }
    function MenuSearchService(){
        var service = this;
        var foundItems = [];
        service.getMatchedMenuItems = function(searchTerm){

            return  $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function(response){

                var data = response.data.menu_items;
                searchTerm = searchTerm.toLowerCase();

                for(var i = 0; i < data.length; i++){
                    
                    var desc = data[i].description;
                    
                    if(desc.includes(searchTerm)){
                        foundItems.push(data[i]);
                    }
                }//end of for

                return foundItems;

            },function(error){
                var message = "Something's gone wrong. Try Again.";
                return message;
            });  
    }

    function foundItems({
        var ddo={
            templateUrl: 'loader/itemsloaderindicator.template.html'
        },
        return ddo;
    })
})();