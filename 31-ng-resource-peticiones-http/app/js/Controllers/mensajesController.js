angular.module('jareina')
  .controller('mensajesController', ['$scope', 'mensajesService',
    function($scope, mensajesService) {
      mensajesService.query(function(datos) {
        $scope.mensajes = datos;
        console.log(datos)
      }, function(err) {
        console.error('Error ' + err.status + ': ' + err.data.mensaje);
      });
    }
  ]);
