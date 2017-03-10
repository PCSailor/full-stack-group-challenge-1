var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/customersview', {
      templateUrl: '/views/templates/customersview.html',
      controller: 'CustomersController',
      controllerAs: 'cc'
    })
    .when('/ordersview', {
      templateUrl: '/views/templates/ordersview.html',
      controller: 'OrdersController',
      controllerAs: 'oc'
    })
    .when('/warehouseview', {
      templateUrl: '/views/templates/warehouseview.html',
      controller: 'WarehouseController',
      controllerAs: 'wc'
    })
    .otherwise({
      redirectTo: 'warehouseview'
    });
}]);
