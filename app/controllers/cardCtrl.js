app.controller("cardCtrl", function($scope, $log, $location, cardStatusService) {
	var url = '/api/data/trend';
	var contextPath = $location.protocol() + "://" + $location.host() + ":" + $location.port();
	console.log("=== ", contextPath);
	console.log("=== ", $location.path());
	
	cardStatusService.startPolling("poll", url, 3000, function(response){
		$log.info("polling ...");
		$scope.cardStatus = response.data;
	});
});
