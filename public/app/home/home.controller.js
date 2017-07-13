(function () {

	'use strict';
	var app;

	app = angular.module('starter');
	app.controller('homeCtrl', ['$scope', '$state', 'homeSvc', '$geolocation', function homeCtrl($scope, $state, homeSvc, $geolocation){
		$geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function(position) {
            $scope.myPosition = position;
            console.log(position.coords);
            $scope.center = {
	            lat: $scope.myPosition.coords.latitude,
	            lng: $scope.myPosition.coords.longitude,
	            zoom: 16
	        }
	        $scope.markers.currentLocation = {
                lat: $scope.myPosition.coords.latitude,
                lng: $scope.myPosition.coords.longitude,
                message: "We are here!",
                focus: true,
                draggable: true
            }
        });

        $scope.tiles = {
            url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
            options: {}
        }
        
	}]);
}());