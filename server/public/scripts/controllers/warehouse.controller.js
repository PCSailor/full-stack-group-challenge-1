<<<<<<< HEAD
App.controller('WarehouseController', ['$http', 'WarehouseFactory', function($http, WarehouseFactory){
=======
App.controller('warehousecontroller', ['$http', 'WarehouseFactory', function($http, WarehouseFactory){
>>>>>>> ca43a331827fa780a3c071e874b2d493aac613de
console.log('warehousecontroller loaded');
var self = this;
self.newWarehouse = {};
self.warehouse = WarehouseFactory.warehouse;

}]);
