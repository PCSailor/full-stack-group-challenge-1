App.factory('WarehouseFactory', ['$http', function($http) {

  var customers = { list: [] };

  getCustomers();

  function getCustomers() {
    $http({
      method: 'GET',
      url: '/warehouse/customers'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      customers.list = response.data;

    });
    return {
      customers: customers
    };
  }
}]);
