/*


*/

var onCmdClick = function(item) {
	console.log(item);
	var cmd = $(item).attr('cmd');
//	console.log("clicked on element with cmd:" + cmd);
	$.get( "/command", { "cmd": cmd } ).done( function(r) {
		var content = r["content"];
		$('#ce_content').html(content);
		var dialog = r["dialog"];
		if (dialog) {
			$("#"+dialog).dialog({
				modal: true,
				buttons: {
					Ok: function() {
						$(this).dialog( "close" );
					}
				}
			});
		}
	} );
}



// simple show dialog
var onShowDialog = function(item) {
	console.log(item);
	var dialogId = $(item).attr('dialog');
	console.log("show dialog:" +  dialogId);
	var sel = "#" + dialogId;
	$( "#"+dialogId ).dialog({
		modal: true,
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
	
}



$(document).ready( function() {
	// $(".dialog").display(false);
	// if doing so, than $(this) in onCmdClick() is set on 
	// the correct element
	// but if the element contains onclick="onCmdClick()" than $(this) is not ok
	// (points to the windows)
	// solution:
	// elemement:  onClick="onCmdClick(this)" and get the element as parameter in onCmdClick(element)
	
//	$(".ce_cmd").click( onCmdClick );
});



