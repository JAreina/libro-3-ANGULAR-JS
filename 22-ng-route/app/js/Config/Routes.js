
'use strict';

//DEFINIR RUTAS EN config

angular.module('jareina')
    .config(['$routeProvider', function($routeProvider) {
        var view = function(view) {
            return 'partials/' + view.split('.').join('/') + '.html';
        }

        $routeProvider.caseInsensitiveMatch = true;
        
        $routeProvider
        .otherwise({
          redirectTo: '/'
        })
        .when('/', {
          templateUrl: view('home'),
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: view('about'), controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: view('contact'), controller: 'ContactCtrl'
        })
        .when('/unautorized', {
          template: 'The server respond 401 Unautorized.'
        })
        .when('/resolverPromesa', {
 template: '<p>Contenido: {{contenido}} </p>'+
 '<p>Promesa: {{promesa}} </p>',
 resolve: {
 contenido: function(){
 return 'Este es el contenido resuelto';
 },
 promesa: function($q){
 var def = $q.defer();
 setTimeout(function(){
 def.resolve('La promesa ha sido resuelta.');
 }, 2000);
 return def.promise;
 }
 },
 controller: function($scope, contenido, promesa){
 $scope.contenido = contenido;
 $scope.promesa = promesa;
 }
 })
 .when('/redirect/:param', {
 redirectTo: function(param, path, search){
 console.log(param, path, search);
 return '/resolver';
}
 })
        ;
    }]);
