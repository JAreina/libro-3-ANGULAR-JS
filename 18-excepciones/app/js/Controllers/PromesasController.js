angular.module('jareina')
  .controller('PromesasController', function($scope, $q) {


    // crear promesa y ejecutarla
  /*  function tarea(comprobar) {
      var dfd = $q.defer();
      setTimeout(function() {
        if (!comprobar) {
          dfd.resolve('Promesa resuelta');
        } else {
          dfd.reject('Promesa rechazada');
        }
      }, 1000);
      return dfd.promise;
    }
*/

    // NUEVA MANERA DE HACER Promesas
    function tarea(comprobar) {
      return $q(function(reject, resolve) {
        setTimeout(function() {
          if (!comprobar) {
            resolve('Promesa resuelta');
          } else {
            reject('Promesa rechazada');
          }
        }, 1000);
      });
    }



    $scope.accion = ejecutar;

    function ejecutar(comprobar) {
      tarea(comprobar).then(function(data) {
        $scope.resuelta = data;
      }, function(error) {
        $scope.rechazada = error;
      })
    }
  });
