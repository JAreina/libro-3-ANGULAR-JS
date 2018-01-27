
//configuración del servicio provider PlaylistProvider

angular.module('jareina').
 config(['PlaylistProvider', function (PlaylistProvider) {
 var canciones = [
 'DESDE CONFIG PLAYLIST',
 'California (CONFIG',
 'Sleep Like a Baby Tonight AGREGADO',
 'Song for Someone AGREGADO',
 'This Is Where You Can Reach Me Now AGREGADO',
 'Iris (Hold Me Close) AGREGADO',
 'The Troubles AGREGADO',
 'Volcano AGREGADO'
 ];

 PlaylistProvider.agregar(canciones);
 }])
