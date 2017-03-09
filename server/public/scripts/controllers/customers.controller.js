
App.controller('CustomersController', ['WarehouseFactory', function(WarehouseFactory){
  console.log('The CustomersController was loaded');
  var self = this;


    self.addTask = function() {
      WarehouseFactory.addTask();
  };

}]);
