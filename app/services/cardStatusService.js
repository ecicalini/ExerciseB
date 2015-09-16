app
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
.config(function ($provide) {
	$provide.factory('cardStatusService', ['$http','$log', function ($http, $scope, $log) {
		var defaultPollingTime = 10000;
        var polls = {};
        
		return {
			getData: function (url) {
				var promise = $http({method: 'GET', url: url})
				.success(function (trend, status, headers, config) {
					return data;
				})
				.error(function (trend, status, headers, config) {
					console.log("status = ", status);
					return {"status": false};
				});

				return promise;
			}, 
			drawPlot: function(alerts) {
//				$log.info("====== alerts prima =");
//				$log.info(alerts);
//				$log.info("======");
//				alerts.pop();
//				$log.info("====== alerts dopo pop =");
//				$log.info(alerts);
//				$log.info("======");
//				alerts.push({ type: 'success', msg: 'Export disponibile per il download' });
			},
			startPolling: function(name, url, pollingTime, callback) {
                // Check to make sure poller doesn't already exist
                if (!polls[name]) {
                    var poller = function() {
                        $http.get(url).then(callback);
                    }
                    poller();
                    polls[name] = setInterval(poller, pollingTime || defaultPollingTime);
                }
            },

            stopPolling: function(name) {
                clearInterval(polls[name]);
                delete polls[name];
            }
		}
	}]);
});