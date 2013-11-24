/*


*/

var onCmdClick = function() {
	console.log($(this));
	var cmd = $(this).attr('cmd');
	console.log("clicked on element with cmd:" + cmd);
	$.get( "/command", { "cmd": cmd } ).done( function(r) {
		var content = r["content"];
		document.getElementById("ce_content").innerHTML = content;
		// jQuery does not work :-( 
		//$('#ce_content').textContent = r;

		// refresh click-handler
		$(".ce_cmd").click( onCmdClick );

	} );
	event.preventDefault();
}



$(document).ready( function() {
//	$("a").click( onCmdClick );
	$(".ce_cmd").click( onCmdClick );
});



