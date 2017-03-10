App.factory('WarehouseFactory', ['$http', function($http) {

  var orders = { list: [] };

  getOrders();

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

  return {
    orders: orders
  };
}]);
