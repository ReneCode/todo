
/*
 * routes.js
 */


var ContentHandler = require('./content');
var ErrorHandler = require('./error');


routes = function (app, db) 
{
	var contentHandler = new ContentHandler(db);

//	console.log('ContentHandler:' + contentHandler);

	app.get('/', contentHandler.displayRootPage)
	app.get('/tasks', contentHandler.displayTaskListPage);
	app.get('/newtask', contentHandler.displayNewTaskPage);
	app.post('/newtask', contentHandler.createNewTask);
	app.get('/edittask/:id', contentHandler.displayEditTaskPage);

	app.use(ErrorHandler);
};

module.exports = routes;
