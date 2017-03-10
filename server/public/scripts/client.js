var App = angular.module('App', ['ngRoute']);
console.log("client JS started");
App.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/customers', {
      templateUrl: '/views/templates/customersview.html',
      controller: 'CustomersController',
      controllerAs: 'cc'
    })
    .when('/orders', {
      templateUrl: '/views/templates/ordersview.html',
      controller: 'OrdersController',
      controllerAs: 'oc'
    })
    .when('/warehouse', {
      templateUrl: '/views/templates/warehouseview.html',
      controller: 'WarehouseController',
      controllerAs: 'wc'
    })
    .otherwise({
      redirectTo: 'warehouse'
    });

}]);
