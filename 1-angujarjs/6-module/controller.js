
 angular.module('jareina3.padre',[]).controller('padreController', ['$scope', function($scope) {


  $scope.coincidencia=false;
  $scope.$watchGroup(['password', 'password2'], function(nuevos, anterior) {
    if (!nuevos) return;

    if (nuevos[0] === nuevos[1]) {
      $scope.coincidencia = true;
    } else {
      $scope.coincidencia = false;
    }
  })

}]);
