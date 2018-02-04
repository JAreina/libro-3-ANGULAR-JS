angular.module('jareina')
  .controller('padreController', ['$scope', function($scope) {

$scope.titulo="JAREINA"

    $scope.$on('eventoHijo', function(evt, arg) {
      $scope.mensaje = arg.msg;
    })
  }])
