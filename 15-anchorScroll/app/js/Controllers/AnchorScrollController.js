angular.module('jareina',[])
.controller('AnchorScrollController', function($scope,$anchorScroll){
  $scope.irA= function(id){
    var nuevaId = `contenido${id}`;
        $anchorScroll(nuevaId);
  }
})
