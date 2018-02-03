angular.module('ContactosApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //$locationProvider.hashPrefix('!');

    var vista = function(vista) {
      return 'views/' + vista.split('.').join('/') + '.html';
    }
    $routeProvider
    .when('/', {
      templateUrl: vista('index'),
    //  controller: 'productosController',
      //controllerAs: 'vm'
      titulo: 'INICIO'
    })
      .when('/contacto', {
        templateUrl: vista('contacto'),
      //  controller: 'productosController',
        //controllerAs: 'vm'
        titulo: 'CONTACTO'
      })

      .otherwise({
        redirectTo: '/'
      })

    $locationProvider.html5Mode(true); //activate HTML5 Mode
  }])
