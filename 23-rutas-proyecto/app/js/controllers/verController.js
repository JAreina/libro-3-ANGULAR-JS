angular.module('ContactosApp')
  .controller('verController', ['$scope', '$routeParams', 'contactosService', '$location',
    function($scope, $routeParams, contactosService, $location) {

      if (contactosService.ver($routeParams.id)) {
        $scope.contacto = contactosService.ver($routeParams.id);
      } else {
        $location.path('/');
      };

      $scope.borrar = function() {
        if (contactosService.borrar($routeParams.id)) {
          $location.path('/');
        } else {
          console.log('No se ha podido eliminar el contacto.');
        };
      }


      $scope.editar = function() {
        $location.path('/' + $routeParams.id + '/editar');
      };


    }
  ])
