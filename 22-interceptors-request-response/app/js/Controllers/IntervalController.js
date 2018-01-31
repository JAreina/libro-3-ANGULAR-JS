angular.module('jareina', [])
  .controller('IntervalController', AppCtrl);

AppCtrl.$inject = ['$scope', '$interval'];

function AppCtrl($scope, $interval) {
  var conteo = $interval(imprimirConteo, 1000, 5);
  var i = 4;

  function imprimirConteo() {
    if (i > 0) {
      console.log('Quedan ' + i + ' segundos.');
      i--;
    } else {
      console.log('Conteo finalizado.');
    }
  }
  conteo.then(function() {
    alert('Ya han pasado 5 segundos.');

    //cancelar IntervalController
    $interval.cancel(conteo);
  });

  //escuchar el evento destroy y cancelar luego de que ocurra
  $scope.$on('$destroy', function(){
    $interval.cancel(conteo);
  })
}
