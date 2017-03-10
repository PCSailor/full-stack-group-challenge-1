App.controller('OrdersController', function() {
  console.log('Order controller loaded');
  var self = this;
  self.message = 'OrdersController are working. Hell Yeah!'

  self.orders = WarehouseFactory.orders;

});
