angular.module('jareina')
  .controller('CacheControllerUno', PrimerCtrl);

PrimerCtrl.$inject = ['$cacheFactory','$log','$exceptionHandler'];

function PrimerCtrl($cacheFactory,$log,$exceptionHandler) {
  var vm = this;

  //crear objeto cache
  var cachePrincipal = $cacheFactory('cachePrincipal');

  //console.log($cacheFactory.info());

  //SUSTITUIR console.log por $log de angular

$log.log("LOG",($cacheFactory.info()));
$log.info("LOG INFO ",($cacheFactory.info()))
$log.warn("LOG WARNING",($cacheFactory.info()))
$log.error("LOG ERROR ",($cacheFactory.info()))


console.log("*************** mi excepcion ******************")

$exceptionHandler(new Error("ERROR LANZADO POR JAreina : ->> "+new Date()));



$log.debug(($cacheFactory.info()))

  //guardar en cache
  vm.guardar = function () {
 cachePrincipal.put('mensaje', vm.texto);
 }
}
