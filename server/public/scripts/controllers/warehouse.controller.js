bizApp.controller('warehousecontroller', ['$http', 'warehouseFactory', function($http, warehouseFactory){
console.log('warehousecontroller loaded');
var self = this;
self.newWarehouse = {};
self.warehouse = warehouseFactory.warehouseTasks




self.addWarehouse = function() {
warehouseFactory.addThisWarehouse(self.newWarehouse)
self.newWarehouse = {};
}



}]);


// NOTE: FACTORY SETTINGS
bizApp.factory('warehouseFactory', ['http', function($http) {
var warehouseFactoryVar = { list: [] };// NOTE: from TaskController // must be property inside of object:

}]);
