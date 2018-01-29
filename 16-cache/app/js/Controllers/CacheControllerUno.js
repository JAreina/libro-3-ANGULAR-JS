angular.module('jareina')
  .controller('CacheControllerUno', PrimerCtrl);

PrimerCtrl.$inject = ['$cacheFactory'];

function PrimerCtrl($cacheFactory) {
  var vm = this;

  //crear objeto cache
  var cachePrincipal = $cacheFactory('cachePrincipal');

  console.log($cacheFactory.info());

  //guardar en cache
  vm.guardar = function () {
 cachePrincipal.put('mensaje', vm.texto);
 }
}
