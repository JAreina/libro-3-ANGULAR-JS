angular.module('jareina')
  .controller('hijoController', ['$scope', function($scope) {
    $scope.click = function() {
      $scope.$emit('eventoHijo', {
        msg: 'Se ha hecho clic en el scope Hijo.'
      });
    };
  }])
