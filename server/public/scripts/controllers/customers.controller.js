
App.controller('CustomersController', ['WarehouseFactory',"$http", function(WarehouseFactory,$http){
  console.log('The CustomersController was loaded');
  var self = this;


    self.customers = WarehouseFactory.customers;


}]);
