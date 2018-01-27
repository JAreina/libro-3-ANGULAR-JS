
"use strict";

//inyección servicio Playlist
angular.module('jareina')
    .controller('PlaylistController', ['$scope','Playlist', function ($scope,Playlist) {

      $scope.playlist= Playlist.listar();
console.log("propiedad privada del sercicio y da UNDEFINED: "+Playlist.playlist)
    }])
