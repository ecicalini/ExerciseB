app.controller("cardStatusCtrl", function($scope) {
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