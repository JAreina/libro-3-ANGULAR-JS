angular.module('ContactosApp')
  .controller('listaController', ['$scope', 'contactosService',
    function($scope, contactosService) {
      $scope.contactos = contactosService.lista();



    }
  ])
