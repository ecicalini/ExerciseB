app.controller("cardStatusCtrl", function($scope, $log, $location, cardStatusService) {
	var contextPath = $location.protocol() + "://" + $location.host() + ":" + $location.port();
	console.log("=== ", contextPath);
	console.log("=== ", $location.path());
	cardStatusService.getData(contextPath + '/api/data/trend').then(function(trend){
		console.log("=== ", trend);
		$scope.cardStatus = trend.data;
		$log.info($scope.cardStatus);
	});
});