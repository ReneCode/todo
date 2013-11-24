
function CommandHandler(db) {
	"use strict"

	this.handleCommand = function(req, res, next) {
//		console.log(JSON.stringify(req.query));
		var cmd = req.query.cmd;
//		console.log("handleCmd:" + cmd);

		var content = "Cmd:" + cmd;
		var menu = "";
		switch (cmd) {
			case "login":
				content ='<a href="#" class="ce_cmd" onclick="onCmdClick(this)" cmd="parts">PartsManagement</a>';
				break;

			case "parts":
				content = 'Das sind jetzt Artikel';
				break;
		}
		var data = {content: content, menu:menu};
		res.send(data);
	}
};


module.exports = CommandHandler;

