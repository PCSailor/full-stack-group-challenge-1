App.factory('WarehouseFactory', ['$http', function($http) {

  var customers = { list: [] };
  var warehouse = { list: [] };
  var orders = { list: [] };

    getWarehouse();
    getCustomers();
    getOrders();

  function getCustomers() {
    $http({
      method: 'GET',
      url: '/warehouse/customers'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      customers.list = response.data;
      // factoryTasks = {
      //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
      // }
    });
  }





  function getOrders() {
    $http({
      method: 'GET',
      url: '/warehouse/orders'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      orders.list = response.data;


    });
  }



function getWarehouse() {
  $http({
    method: 'GET',
    url: '/warehouse/warehouse'
  }).then(function(response) {
    console.log('response from factory: ', response);
    console.log('response.data from factory: ', response.data);
    warehouse.list = response.data;
  });
}

return{
  customers : customers,
  warehouse: warehouse,
  orders: orders
};

}]);
