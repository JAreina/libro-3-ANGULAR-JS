angular.module('jareina')
.factory('mensajesService', ['$resource', function ($resource) {
// return $resource('./api/generated.json');
 return $resource('http://localhost:3000/usuarios/:usuario',{usuario: "@usuario"});
 }]);
