App.controller('WarehouseController', [ 'WarehouseFactory', function( WarehouseFactory){
console.log('WarehouseController loaded');
var self = this;
self.newWarehouse = {};
self.warehouse = WarehouseFactory.warehouse.list;


// self.getWarehouse = function() {
// WarehouseFactory.addThisWarehouse(self.newWarehouse)
// self.newWarehouse = {};
// }

}]);
