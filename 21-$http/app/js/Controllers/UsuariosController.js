angular.module('jareina')
  .controller('UsuariosController', ['$scope', '$http',

  function($scope, $http) {



     $http.get('./usuarios.json').then(function(data) {
      $scope.usuarios = data;
      console.log(data)
    },function(error){
      $scope.error = error;
      console.log(error)
    })
  }])
