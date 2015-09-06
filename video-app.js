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
			$('#playBtn').children('span').toggleClass('glyphicon glyphicon-play', false);
			$('#playBtn').children('span').toggleClass('glyphicon glyphicon-pause', true);

		}else  {
			$scope.videoDisplay.pause();
			$scope.videoPlaying = false;
			$('#playBtn').children('span').toggleClass('glyphicon glyphicon-pause', false);
			$('#playBtn').children('span').toggleClass('glyphicon glyphicon-play', true);
			
		}


	}


	$scope.toggleMute = function() {
		if($scope.videoDisplay.volume == 0.0) {
			$scope.videoDisplay.volume = 1.0;
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-off', false);
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-up', true);
			
		}else  {
			$scope.videoDisplay.volume = 0.0;
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-up', false);
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-off', true);
			
		}



	}













}]);





