
/*
 * routes.js
 */


var ContentHandler = require('./content');
var ProjectHandler = require('./project');
var ErrorHandler = require('./error');
var CommandHandler = require('./command');



routes = function (app, db) 
{
	var contentHandler = new ContentHandler(db);
	var commandHandler = new CommandHandler(db);
	var projectHandler = new ProjectHandler();

//	console.log('ContentHandler:' + contentHandler);

	app.get('/', contentHandler.displayRootPage);
	app.get('/tasks', contentHandler.displayTaskListPage);
	app.get('/newtask', contentHandler.displayNewTaskPage);
	app.post('/newtask', contentHandler.createNewTask);
	app.get('/edittask/:id', contentHandler.displayEditTaskPage);
	app.post('/updatetask', contentHandler.updateTask);

	app.get('/projects', projectHandler.displayRootPage);

	app.get('/command', commandHandler.handleCommand);

	app.use(ErrorHandler);
};

module.exports = routes;

