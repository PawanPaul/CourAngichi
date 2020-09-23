(function () {
  'use strict';

  angular.module('shopper', [])
  .controller('sysctrl',sysctrl)
  .controller('addctrl',addctrl)
  .controller('listctrl',listctrl)
  .controller('buyctrl',buyctrl)
  .service('listservice',listservice);
  sysctrl.$inject=['listservice'];
  function sysctrl(listservice){
  }
  listctrl.$inject=['listservice'];
  function listctrl(listservice){
    var listreveal = this;

    listreveal.buylist = listservice.getlistItems();
    listreveal.buyitem = function (itemIndex) {
      listservice.buyitem(itemIndex);
      console.log("Item bought");
    };
    listreveal.removeItem = function (itemIndex){
      listservice.removeItem(itemIndex);
    };
  }
  buyctrl.$inject=['listservice'];
  function buyctrl(listservice){
    var listconfirm = this;

    listconfirm.boughtlist = listservice.getboughtItems();
  }
  addctrl.$inject=['listservice'];
  function addctrl(listservice){
    var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    listservice.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    console.log(itemAdder.itemName);
  }
  }
  function listservice(){
    var service = this; 
    //I suppose this sets the service her
    var buylist = []; 
    // The list listctrl deals with
    var boughtlist = [];
    //buyctrl deals with this
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      buylist.push(item);
    };
  
    service.removeItem = function (itemIndex) {
      buylist.splice(itemIndex, 1);
    };
  
    service.buyitem = function (itemIndex) {
      var item= {
        name: buylist[itemIndex].name,
        quantity: buylist[itemIndex].quantity
      };
      boughtlist.push(item);
      buylist.splice(itemIndex, 1);
    }
    service.getlistItems = function () {
      return buylist;
    };
    service.getboughtItems = function () {
      return boughtlist;
    };
  }
})();