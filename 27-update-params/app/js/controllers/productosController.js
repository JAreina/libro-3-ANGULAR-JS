angular.module('ContactosApp')
  .controller('productosController', ['$scope', '$location', '$route','$routeParams',

    function($scope, $location, $route,$routeParams) {
      var vm = this;
//$scope.seleccion="";
//var parametro = $scope.seleccion;
//console.log("parametro: "+ parametro)

vm.orden = $routeParams.orden || 'ventas'

console.log("ORDEN " +vm.orden)
//if(parametro !== '')
  //    vm.orden = $route.updateParams({
    //    orden: $scope.seleccion
    //  });

      vm.organizar = [
       { val: '-puntos', texto: 'Mayor Puntuado' },
       { val: 'puntos', texto: 'Menor Puntuado' },
       { val: '-ventas', texto: 'Más Vendido' },
       { val: 'ventas', texto: 'Menos Vendido' },
       { val: 'precio', texto: 'Menor Precio' },
       { val: '-precio', texto: 'Mayor Precio' }
       ];
       vm.cambiarOrden = function () {
       $route.updateParams({ orden: vm.orden });
       }
       vm.cambiarOrden2 = function () {
       $route.updateParams({ orden: vm.orden });
       $location.path('/productos/'+vm.orden)
       }



      vm.productos = [{
          nombre: 'Samsung Galaxy S4',
          precio: 198.99,
          puntos: 175,
          ventas: 4718
        },
        {
          nombre: 'Samsung Galaxy S3',
          precio: 105.99,
          puntos: 196,
          ventas: 1820
        },
        {
          nombre: 'Asus Zenfone 2',
          precio: 179.99,
          puntos: 127,
          ventas: 716
        },
        {
          nombre: 'HTC Desire 620',
          precio: 199.99,
          puntos: 166,
          ventas: 914
        },
        {
          nombre: 'HTC One M7',
          precio: 175.95,
          puntos: 1694,
          ventas: 1589
        },
        {
          nombre: 'LG L Bello',
          precio: 149.99,
          puntos: 211,
          ventas: 891
        },
        {
          nombre: 'Motorola Moto X 2',
          precio: 219.99,
          puntos: 1865,
          ventas: 6174
        }
      ];
    }
  ]);
