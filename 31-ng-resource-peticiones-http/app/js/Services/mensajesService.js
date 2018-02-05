angular.module('jareina')
.factory('mensajesService', ['$resource', function ($resource) {
// return $resource('./api/generated.json');
 return $resource('http://localhost:3000/usuarios/:usuario',
                                                          {usuario: "@usuario"},
                                                                                       null,
                              { 'get':    {method:'GET'},
                                 'save':   {method:'POST'},
                                 'query':  {method:'GET', isArray:true},
                                 'remove': {method:'DELETE'},
                                 'delete': {method:'DELETE'}
                               })





 }]);
