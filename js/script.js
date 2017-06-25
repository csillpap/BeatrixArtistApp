$(document).ready(function() {
	
	// we want the dropdown list to be shown when hovering over the Gallery button
	$("li#gallery.dropdown").mouseenter(function() {
		$(".dropdown-menu").slideDown();
	});
	
	// when not hovering over the Gallery button we want the dropdown list to disappear
	$("li#gallery.dropdown").mouseleave(function() {
		$(".dropdown-menu").slideUp();
	});
	
});