bizApp.controller('warehousecontroller', ['$http', 'WarehouseFactory', function($http, WarehouseFactory){
console.log('warehousecontroller loaded');
var self = this;
self.newWarehouse = {};
self.warehouse = WarehouseFactory.warehouseTasks




self.addWarehouse = function() {
WarehouseFactory.addThisWarehouse(self.newWarehouse)
self.newWarehouse = {};
}



}]);


// NOTE: FACTORY SETTINGS
bizApp.factory('WarehouseFactory', ['http', function($http) {
var warehouseFactoryVar = { list: [] };// NOTE: from TaskController // must be property inside of object:

}]);
