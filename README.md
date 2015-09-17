# ExerciseB

On file app/index.js add following route:

// application -------------------------------------------------------------
var path = require('path');
app.get('/ExerciseB*', function(req, res) {
	res.sendFile(req.url, { root: path.join(__dirname, '../') }); 
});
//--------------------------------------------------------------------------

Unzip project ExerciseB on server root

server_root_path/ExerciseA$bower install

Launch http://your_server/ExerciseB/app/views/CardStatus.html on browser.
 
The page automatically reload data every 3 seconds.

Warning! On the server must be exists the route '/api/data/trend' 