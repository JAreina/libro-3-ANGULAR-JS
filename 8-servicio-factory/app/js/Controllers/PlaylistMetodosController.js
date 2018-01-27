"use strict";

//inyección servicio Playlist
angular.module('jareina')
    .controller('PlaylistMetodosController', ['$scope','Playlist',
                  function ($scope,Playlist) {

      $scope.playlist= Playlist.listar();
      $scope.borrar=function(id){
            Playlist.borrar(id);
      }
    }])
