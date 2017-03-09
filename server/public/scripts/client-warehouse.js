var bizApp = angular.module('warehouseApp', ['ngRoute']);

  bizApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/warehouse', {
  templateUrl: 'views/warehouse.html',
  controller: 'warehouseController',
  controllerAs: 'wc'
});
  }])


])
