App.controller('OrdersController', ['WarehouseFactory', function(WarehouseFactory) {
  console.log('Order controller loaded');
  var self = this;
  self.message = 'OrdersController are working. Hell Yeah!'; 

  self.orders = WarehouseFactory.orders;

}]);
