app.controller("cardStatusCtrl", function($scope, $log, $location, cardStatusService) {
	var url = '/api/data/trend';
	var contextPath = $location.protocol() + "://" + $location.host() + ":" + $location.port();
	console.log("=== ", contextPath);
	console.log("=== ", $location.path());
	
	cardStatusService.startPolling("poll", url, 3000, function(response){
		$log.info("polling ...");
		$scope.cardStatus = response.data;
	});

	
	$scope.color = function (card) {
	    if (card.color) {
	        return card.color;
	    }

	    var letters = '012345'.split('');
	    var color = '#';
	    color += letters[Math.round(Math.random() * 5)];
	    letters = '0123456789ABCDEF'.split('');
	    for (var i = 0; i < 5; i++) {
	        color += letters[Math.round(Math.random() * 15)];
	    }

	    // assign the color so it doesn't freak out
	    card.color = color;

	    return color;
	};
});