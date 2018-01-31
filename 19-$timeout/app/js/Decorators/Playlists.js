angular.module('jareina')
  .config(['$provide', function($provide) {
    $provide.decorator('Playlist', ['$delegate', function($delegate) {
      $delegate.texto = function() {
        return $delegate.listar().join(', ');
      };
      return $delegate;
    }]);
  }]);
//agrega funcionalidad al servicio Playlist el metodo texto
