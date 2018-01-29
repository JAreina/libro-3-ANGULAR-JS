angular.module('jareina')
  .controller('PromesasController', function($scope,$q) {
    var promesa1 = $q.defer();
    var promesa2 = $q.defer();
    var promesa3 = $q.defer();

    promesa1.promise.then(completado);
    promesa2.promise.then(completado);
    promesa3.promise.then(completado);

    function completado(data) {
      console.log(data);
    }

    setTimeout(function() {
      promesa1.resolve('Promesa #1 resuelta');
    }, Math.random() * 1000);
    setTimeout(function() {
      promesa2.resolve('Promesa #2 resuelta');
    }, Math.random() * 1000);
    setTimeout(function() {
      promesa3.resolve('Promesa #3 resuelta');
    }, Math.random() * 1000);


$scope.promesas = null;

    var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);
    todas.then(function(data) {
      $scope.promesas = data;
      console.log(data);
    })
  });
