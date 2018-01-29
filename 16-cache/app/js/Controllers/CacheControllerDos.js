angular.module('jareina')
  .controller('CacheControllerDos', SegundoCtrl);


SegundoCtrl.$inject = ['$cacheFactory'];

function SegundoCtrl($cacheFactory) {
  var vm = this;
  var cachePrincipal = $cacheFactory.get('cachePrincipal');


//obtener del objeto cache creado
  vm.imprimir = function() {
    console.log(cachePrincipal.get('mensaje'));
  }
}
