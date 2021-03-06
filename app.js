
/**
 * Module dependencies.
 */

var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var routes = require('./routes/routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


console.log("connecting MongoDb");
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/todo';

MongoClient.connect(mongoUri, function(err, db) {
	if (err) throw err;

	console.log("connected to MongoDb");

//	var db= null;
	routes(app, db);

	http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});
});

console.log("app started");