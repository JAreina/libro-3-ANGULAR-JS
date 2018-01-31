
"use strict";
// Declaramos la aplicacion y definimos sus dependencias
angular.module('jareina', [])
.run(['$anchorScroll',function ($anchorScroll) {
        $anchorScroll.yOffset = 100;

      }])
      .factory('$exceptionHandler',ManejadorDeExcepciones)


        ManejadorDeExcepciones.$inject = ['$log'];


        function ManejadorDeExcepciones($log){
          return function miExcepcion(exception,cause){
          
                      $log.warn(exception, cause);
          }
        }
