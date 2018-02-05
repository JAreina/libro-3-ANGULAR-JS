angular.module('jareina')
  .controller('mensajesController', ['$scope', 'mensajesService',
    function($scope, mensajesService) {


      mensajesService.query(function(datos) {
        $scope.mensajes = datos;
        console.log(datos)
      }, function(err) {
        console.error('Error ' + err.status + ': ' + err.data.mensaje);
      });

      //un usuario solo
      $scope.uno = mensajesService.get({
        usuario: 1
      })


      //POST
      $scope.nuevo = function() {
        mensajesService.save( $scope.msg, function(res) {
          $scope.mensajes.push(res);
          $scope.msg = {};
          console.log("AÑADIDO " + res)
        }, function(error) {
          console.log(error)
        });
      }

    }
  ]);
