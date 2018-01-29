
"use strict";
// Declaramos la aplicacion y definimos sus dependencias
angular.module('jareina', [])
.run(['$anchorScroll',function ($anchorScroll) {
        $anchorScroll.yOffset = 100;
        
      }]);
