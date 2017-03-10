App.controller('WarehouseController', ['$http', 'WarehouseFactory', function($http, WarehouseFactory){
console.log('warehousecontroller loaded');
var self = this;
self.newWarehouse = {};
self.warehouse = WarehouseFactory.warehouse;

}]);
