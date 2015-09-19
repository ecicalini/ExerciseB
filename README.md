A simple web application that ranking last week trend of a set of products.

#Dependency

* angularjs, available on bower.

#Installation

Deploy the web application in server root and add following route in file app/index.js:

<pre>
<code>
// application -------------------------------------------------------------
var path = require('path');
app.get('/ExerciseB*', function(req, res) {
	res.sendFile(req.url, { root: path.join(__dirname, '../') }); 
});
//--------------------------------------------------------------------------
</pre>
</code>

and install web application dependecy

<pre>
<code>
:~/exercise-dummy-server/ExerciseB$ bower install
bower cached        git://github.com/angular/bower-angular.git#1.4.6
bower validate      1.4.6 against git://github.com/angular/bower-angular.git#~1.4.5
bower install       angular#1.4.6

angular#1.4.6 bower_components/angular
</pre>
</code>

#Run the WebApp

Connect to **http://your_server/ExerciseB/app/views/CardStatus.html**.
 
The page automatically reload data every 3 seconds.

**Warning! On the server must be exists the route '/api/data/trend'**