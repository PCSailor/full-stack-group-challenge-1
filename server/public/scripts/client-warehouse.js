var bizApp = angular.module('warehouseApp', ['ngRoute']);
// NOTE:
  bizApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/warehouse', {
  templateUrl: 'views/warehouse.html',
  controller: 'warehouseController',
  controllerAs: 'wc'
});
  }]);


]);
