angular.module('ContactosApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    //$locationProvider.hashPrefix('!');

    var vista = function(vista) {
      return 'views/' + vista.split('.').join('/') + '.html';
    }
    $routeProvider
    .when('/', {
      templateUrl: vista('index'),
      controller: 'productosController',
      controllerAs: 'vm'
    })
      .when('/productos/:orden?', {
        templateUrl: vista('productos'),
        controller: 'productosController',
        controllerAs: 'vm'
      })

      .otherwise({
        redirectTo: '/'
      })

    $locationProvider.html5Mode(true); //activate HTML5 Mode
  }])
