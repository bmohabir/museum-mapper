/**
* shows DOM menu and focuses search box
*/
function showMenu() {
	$('#slide-menu').width(240);
	$('#filter-query').focus();
}

/**
* hides DOM menu
*/
function hideMenu() {
	$('#slide-menu').width(0);
}

// binds menu show and hide buttons to respective functions
$('#show-menu').click(showMenu);
$('#hide-menu').click(hideMenu);
