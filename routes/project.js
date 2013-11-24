
// project.js

function ProjectHandler() {


	this.displayRootPage = function(req, res, next) {
		res.send("hallo");
	}

}


module.exports = ProjectHandler;
