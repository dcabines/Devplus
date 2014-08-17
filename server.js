'use strict';

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.use('/*', function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port'));
});