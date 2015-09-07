var videoApp = angular.module('videoApp', []);

videoApp.controller('VideoController', ['$scope','$window', function($scope,$window) {
	$scope.videoDisplay = document.getElementById('videoElement');
	$scope.videoSource = $window.videoSource;
	$scope.titleDisplay = $window.titleDisplay;
	$scope.videoDescription = $window.videoDescription;

	$scope.videoPlaying = false;

	$scope.currentTime;
	$scope.totalTime;

	$scope.showOptions = false;

	$scope.initPlayer = function() {
		$scope.currentTime = 0;
		$scope.totalTime = 0;
		$scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
		$scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true);
	}

	$scope.updateTime = function(e) {
		$scope.currentTime = e.target.currentTime;
		$scope.updateLayout();
	}

	$scope.updateData = function(e) {
		$scope.totalTime = e.target.duration;
	}

	$scope.updateLayout = function() {
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	}



	$scope.toggleDetails = function() {
		if($scope.showOptions) {
			$scope.showOptions = false;
		} else {
			$scope.showOptions = true;
		}

	}



	$scope.togglePlay = function() {
		if($scope.videoDisplay.paused) {
			$scope.videoDisplay.play();
			$scope.videoPlaying = true;
			$('#playBtn').children("span").toggleClass('glyphicon-play', false);
			$('#playBtn').children("span").toggleClass('glyphicon-pause', true);
		} else {
			$scope.videoDisplay.pause();
			$scope.videoPlaying = false;
			$('#playBtn').children('span').toggleClass('glyphicon-play', true);
			$('#playBtn').children('span').toggleClass('glyphicon-pause', false);
		}

	}

	$scope.toggleMute = function() {
		if($scope.videoDisplay.volume == 0.0) {
			$scope.videoDisplay.volume = 1.0;
			$('#muteBtn').children('span').toggleClass("glyphicon-volume-up", true);
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-off', false);

		} else {
			$scope.videoDisplay.volume = 0.0;
			$('#muteBtn').children('span').toggleClass("glyphicon-volume-up", false);
			$('#muteBtn').children('span').toggleClass("glyphicon-volume-off", true);
		}

	}


	$scope.toggleFullscreen = function() {
		var v = $scope.videoDisplay;
		if(v.requestFullscreen) {
			v.requestFullscreen();
		}else if(v.mozRequestFullScreen) {
			v.mozRequestFullScreen();
		}else if(v.webkitRequestFullscreen) {
			v.webkitRequestFullscreen();
		}else if(v.msRequestFullscreen) {
			v.msRequestFullscreen();
		}
	}



	$scope.initPlayer();


}]);


videoApp.filter('time', function() {
	return function(seconds) {
		var hh = Math.floor(seconds/ 3600),
		mm = Math.floor(seconds/ 60),
		ss = Math.floor(seconds) % 60;

		return hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") +ss;


	};

});



















