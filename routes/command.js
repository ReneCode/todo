
function CommandHandler(db) {
	"use strict"

	this.handleCommand = function(req, res, next) {
		console.log(JSON.stringify(req.query));
		var cmd = req.query.cmd;
		console.log("hallo:" + cmd);
		if (!cmd) {
			res.send('Error: "cmd" paramteter missing');
			return;
		}

		var content = "-- empty --";
		var menu = "";
		console.log("hallo");
		switch (cmd) {
			case "login":
				content ='<a href="#" class="ce_cmd" cmd="parts">PartsManagement</a>';
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

