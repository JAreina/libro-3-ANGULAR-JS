angular.module('jareina')
  .controller('hijoController', ['$scope', function($scope) {
    $scope.$on('eventoPadre', function(evt, arg) {
      $scope.mensaje = arg.msg;
    })
  }])
