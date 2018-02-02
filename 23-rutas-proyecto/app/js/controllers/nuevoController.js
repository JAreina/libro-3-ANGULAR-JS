angular.module('ContactosApp')
  .controller('nuevoController', ['$scope', 'contactosService', '$location',
    function($scope, contactosService, $location) {
      var contacto = $scope.contacto = {};

      $scope.crear = function() {

        contacto= {
          nombre: $scope.contacto.nombre,
          email: $scope.contacto.email,
          tel: $scope.contacto.tel,
        }
        if (contactosService.crear(contacto)) {
          $location.path('/');
        } else {
          console.log('No se ha podido crear el contacto');
        };
      }
    }
  ]);
