angular.module('jareina')
  .service('Playlist', [function() {
    var playlist = [
      'The Miracle (Of Joey Ramone)',
      'Raised By Wolves',
      'Every Breaking Wave',
      'Cedarwood Road',
      'California (There Is No End to Love)',
      'Sleep Like a Baby Tonight',
      'Song for Someone',
      'This Is Where You Can Reach Me Now',
      'Iris (Hold Me Close)',
      'The Troubles',
      'Volcano'
    ];
    this.listar = function() {
      return playlist;
    };
    this.borrar = function(id) {
      playlist.splice(id, 1);
    };

  }])
