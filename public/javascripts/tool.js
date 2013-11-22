

/*


*/
var onCmdClick = function() {
	var cmd = $(this).attr('cmd');
	console.log("clicked on element with cmd:" + cmd);
	$.get( "/command", { "cmd": cmd } ).done( function(r) {
		var content = r["content"];
		document.getElementById("ce_content").innerHTML = content;
		// jQuery does not work :-( 
		//$('#ce_content').textContent = r;
	} );
	event.preventDefault();
}



$(document).ready( function() {
	$("a").click( onCmdClick );
});



