
// project.js

function ProjectHandler() {


	this.displayRootPage = function(req, res, next) {
		//res.send("hallo");
		res.render('project');
	}

}


module.exports = ProjectHandler;
