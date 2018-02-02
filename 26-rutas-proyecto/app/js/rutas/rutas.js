angular.module('ContactosApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //$locationProvider.hashPrefix('!');

    var vista = function(vista) {
      return 'views/' + vista.split('.').join('/') + '.html';
    }
    $routeProvider
      .otherwise({
        redirectTo: '/'
      })
      .when('/', {
        templateUrl: vista('lista'),
        controller: 'listaController'
      })
      .when('/nuevo', {
        templateUrl: vista('nuevo'),
        controller: 'nuevoController'
      })

      .when('/:id', {
        templateUrl: vista('ver'),
        controller: 'verController'
      })
      .when('/:id/editar', {
        templateUrl: vista('editar'),
        controller: 'editarController'
      })
    $locationProvider.html5Mode(true); //activate HTML5 Mode
  }])
