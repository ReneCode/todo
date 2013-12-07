/*


*/

var onCmdClick = function(item) {
	console.log(item);
	var cmd = $(item).attr('cmd');
	console.log("clicked on element with cmd:" + cmd);
	$.get( "/command", { "cmd": cmd } ).done( function(r) {
		var content = r["content"];
		$('#ce_content').html(content);
	} );
}



$(document).ready( function() {
	// if doing so, than $(this) in onCmdClick() is set on 
	// the correct element
	// but if the element contains onclick="onCmdClick()" than $(this) is not ok
	// (points to the windows)
	// solution:
	// elemement:  onClick="onCmdClick(this)" and get the element as parameter in onCmdClick(element)
	
//	$(".ce_cmd").click( onCmdClick );
});



