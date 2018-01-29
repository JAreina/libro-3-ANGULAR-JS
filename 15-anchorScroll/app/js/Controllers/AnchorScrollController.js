angular.module('jareina',[])
.controller('AnchorScrollController', function($scope,$anchorScroll,$location){
  $scope.irA= function(id){

    var nuevaId = `contenido${id}`;
    $location.hash(nuevaId);//nueva direccion en barra url
        $anchorScroll(nuevaId);
  }
})
