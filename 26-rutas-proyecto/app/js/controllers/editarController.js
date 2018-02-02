angular.module('ContactosApp')
  .controller('editarController', ['$scope', 'contactosService', '$location', '$routeParams',
    function($scope, contactosService, $location, $routeParams) {
      if (!$routeParams.id && !contactosService.ver($routeParams.id)) {
        $location.path('/')
      };
      var contacto = $scope.contacto = contactosService.ver($routeParams.id);
      $scope.cancelar = function() {
        $location.path('/' + $routeParams.id)
      };
      $scope.guardar = function() {
        contactosService.editar($routeParams.id, contacto)
        $location.path('/' + $routeParams.id)
      }
    }
  ])
