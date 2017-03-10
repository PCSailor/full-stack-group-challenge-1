
App.controller('WarehouseController', [ 'WarehouseFactory', function( WarehouseFactory){
console.log('WarehouseController loaded');

var self = this;
self.newWarehouse = {};
self.warehouse = WarehouseFactory.warehouse;


}]);
