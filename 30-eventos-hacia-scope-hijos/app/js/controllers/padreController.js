angular.module('jareina')
  .controller('padreController', ['$scope', function($scope) {

    $scope.titulo = "JAREINA"

    $scope.click = function() {
      $scope.$broadcast('eventoPadre', {
        msg: 'Se ha hecho clic en el scope Padre.'
      });
    };
  }])
