angular.module('jareina', [])
  .controller('TimeoutController', fn);

 fn.$inject = ['$timeout'];

function fn($timeout) {
  var vm = this;
  var retraso = $timeout(Accion, 3000, true, 'Uno', 'Dos');

  function Accion(param1, param2) {
    console.log('Ejecutado después de dos segundos.');
    console.log('Parámetros: ', param1, param2);
    return 'Mensaje devuelto por el temporizador.';
  }

  retraso.then(function(msg) {
    console.log(msg);
    console.log('Retraso finalizado');
  });

  retraso.catch(function() {
    console.log('Retraso cancelado.');
  })

  vm.cancelar = function() {
    $timeout.cancel(retraso);
  }
}
