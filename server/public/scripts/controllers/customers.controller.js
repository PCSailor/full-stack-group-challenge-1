
App.controller('CustomersController', ['WarehouseFactory', function(WarehouseFactory){
  console.log('The CustomersController was loaded');
  var self = this;


    self.customers = WarehouseFactory.customers.list;
    self.message = 'just show up dammit!';

}]);
