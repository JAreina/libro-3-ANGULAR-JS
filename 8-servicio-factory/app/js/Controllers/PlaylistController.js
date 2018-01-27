
"use strict";

//inyección servicio Playlist
angular.module('jareina')
    .controller('PlaylistController', ['$scope','Playlist', function ($scope,Playlist) {

      $scope.playlist= Playlist.listar();

    }])
