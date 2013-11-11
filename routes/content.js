
var DbTask = require('../db/task');


function ContentHandler(db) {
	"use strict"

	var dbTask = new DbTask(db);

	this.displayRootPage = function(req, res, next) {
//		res.redirect('/tasks');
		return res.render('index', {title:'Root-Page'});
	}

	this.displayTaskListPage = function(req, res, next) {

		dbTask.getTasks( function(err, result) {
			return res.render('tasklist', {title:'Task List', task: result});

		});
	}

	this.displayNewTaskPage = function(req, res, next) {
		var task = {name:'', description:'', _id:'', tags:''};
		var data = {	title:'Create new Task', 
						btn_label:'Create', 
						submit_action:'/newtask',
						task: task };
		return res.render('taskdetail', data);
	}

	this.createNewTask = function(req, res, next) {
//		console.log(JSON.stringify(req.body));

		var name = req.body.name;
		var description = req.body.description;
		var tags = req.body.tags;
		if (!name) {
			console.log('name is empty');
			// redirect to create task
		} 
		dbTask.createTask( name, description, tags, function(err, result) {
			res.redirect('/tasks');
		});
	}

	this.displayEditTaskPage = function(req, res, next) {
		var id = req.params.id;		
		dbTask.getTask(id, function(err, result) {
			if (err) throw err;

			var data = {	title:'Edit Task', 
							btn_label:'Update', 
							submit_action:'/updatetask',
							task: result };
			return res.render('taskdetail', data);
		}) 		
	}

	this.updateTask = function(req, res, next) {
		console.log('update task');
		console.log(JSON.stringify(req.body));
		var task = { name: req.body.name,
					 description: req.body.description,
					 tags: req.body.tags };
		var id = req.body.id;
		dbTask.updateTask(id, task, function(err, result) {
			if (err) throw err;

			res.redirect('/tasks');

		})

	}
}

module.exports = ContentHandler;