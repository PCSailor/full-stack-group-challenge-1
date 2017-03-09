var App = agnular.module('App', ['ngRouter']);

  App.config(['routeProvider', function($routeProvider) {

    $routeProvider
    .when('/orders', {
      templateURL: '/views/templates/ordersview.html',
      controller: 'OrdersController',
      controllerAs: 'oc'
    })

}]);
