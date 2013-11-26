
// project.js

function ProjectHandler() {


	this.displayRootPage = function(req, res, next) {
		//res.send("hallo");
		var prjs = [ 'hallo', 'test', 'oho', 'aha'];
		res.render('project', { title:'Projects', projects: prjs } );
	}

}


module.exports = ProjectHandler;
