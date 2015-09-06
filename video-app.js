var videoApp = angular.module('videoApp', []);



videoApp.controller('VideoController', ['$scope', '$window', function($scope,$window) {
	$scope.videoDisplay = document.getElementById('videoElement');
	$scope.videoSource = $window.videoSource;
	$scope.titleDisplay = $window.titleDisplay;
	$scope.videoDescription = $window.videoDescription;

	$scope.videPlaying = false;

	$scope.togglePlay = function() {
		if($scope.videoDisplay.paused) {
			$scope.videoDisplay.play();
			$scope.videoPlaying = true;
		} else {
			$scope.videoDisplay.pause();
			$scope.videoPlaying = false;
		}


	}


	$scope.toggleMute = function() {
		if($scope.videoDisplay.volume = 0.0) {
			$scope.videoDisplay.volume = 1.0;
		} else {
			$scope.videoDisplay.volume = 0.0;
		}



	}













}]);





