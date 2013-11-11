// db/task.js
var ObjectID = require('mongodb').ObjectID;


function DbTask(db) {
	"use strict"

//	console.log('construct DbTask' + db);

	var colTask = null;
	if (db) {
		colTask = db.collection('task');
	}
	else {
		console.log("No Db availiable!");
	}

	this.getTasks = function(callback) {
		"use strict"

		colTask.find({}, {sort:[['name',1]]}).toArray(function(err, items) {
			if (err) return callback(err, null);

			console.log('DB getTasks:' + items.length + ' tasks');
			callback(err, items);
		});
	}

	this.getTask = function(id, callback) {
		"use strict"

		colTask.findOne({_id:new ObjectID(id)}, function(err, result) {
			if (err) return callback(err, null);

			console.log('DB getTask:' + result.name);
			callback(err, result);
		});
	}


	this.createTask = function(name, description, tags, callback) {
		"use strict"

		var task = {'name':name,
				'description':description,
				'tags':tags,
				'date': new Date() }
		colTask.insert(task, function(err, result) {
			if (err) return callback(err, null);

			var id = result._id;
			console.log('DB createTask');
			callback(err, id);
		});
	}

	this.updateTask = function(id, task, callback) {
		"use strict"

		colTask.update({_id:new ObjectID(id)}, {$set:task}, function(err, result) {
			if (err) return callback(err, null);

			callback(err, result);
		});
	}
}

module.exports = DbTask;