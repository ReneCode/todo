
function CommandHandler(db) {
	"use strict"

	this.handleCommand = function(req, res, next) {
//		console.log(JSON.stringify(req.query));
		var cmd = req.query.cmd;
//		console.log("handleCmd:" + cmd);

		
		var content = "Cmd:" + cmd;
		var menu = "";
		var dialog = undefined;
		switch (cmd) {
			case "login":
				content ='<a href="#" class="ce_cmd" onclick="onCmdClick(this)" cmd="parts">PartsManagement</a>';

				break;

			case "parts":
				content = 'Das sind jetzt Artikel';
				break;

			case "showdialog":
			content = 
' <div class="dialog" id="dialog-a" title="new dialog"> 	<p> 	\
	<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span> 	\
		Your files have downloaded successfully into the My Downloads folder. 	</p> 	<p> 	\
			Currently using <b>36% of your storage space</b>. 	</p> </div> ';
			dialog = "dialog-a";

		}
		console.log("Dialog:" + dialog);
		var data = {content: content, menu:menu, dialog:dialog};
		res.send(data);
	}
};


module.exports = CommandHandler;

