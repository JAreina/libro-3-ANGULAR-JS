angular.module('ContactosApp')
.run(['$rootScope',function($rootScope){
  $rootScope.$on('$routeChangeStart',
   function(evento,siguiente,actual){
     console.log(siguiente.titulo)
    $rootScope.titulo = siguiente.titulo || "JAREINA";
  })
}])
