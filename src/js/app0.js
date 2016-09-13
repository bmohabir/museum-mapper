var $slideMenu = $('#slide-menu');

/**
* Shows DOM menu and focuses search box
*/
function showMenu() {
	$slideMenu.width(240);
	// delay search box focus due to some browsers canceling CSS transitions
	// halfway through
	window.setTimeout(function() {
		$('#filter-query').focus();
	}, 500);
}

/**
* Hides DOM menu
*/
function hideMenu() {
	$slideMenu.width(0);
}

// binds menu show and hide buttons to respective functions
$('#show-menu').click(showMenu);
$('#hide-menu').click(hideMenu);
