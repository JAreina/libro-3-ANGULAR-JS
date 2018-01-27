
"use strict";

//inyección servicio Playlist
angular.module('jareina')
    .controller('PlaylistController', ['$scope','Playlist','miConstante' ,function ($scope,Playlist,miConstante) {


    $scope.esMiConstante = miConstante;

      $scope.playlist= Playlist.listar();
console.log("propiedad privada del sercicio y da UNDEFINED: "+Playlist.playlist)
    }])
