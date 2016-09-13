var $slideMenu = $('#slide-menu');
var $showMenu = $('#show-menu');
var $hideMenu = $('#hide-menu');
var $searchBox = $('#filter-query');
var $mapReset = $('.map-reset');

/**
* Shows DOM menu and focuses search box
*/
function showMenu() {
	$slideMenu.width(240);
	// delay search box focus due to some browsers canceling CSS transitions
	// halfway through
	window.setTimeout(function() {
		$searchBox.focus();
	}, 500);
}

/**
* Hides DOM menu
*/
function hideMenu() {
	$slideMenu.width(0);
}

/**
* Attempts to determine if app view is portrait or landscape
* @returns {string} - 'portrait' or 'landscape'
*/
function getOrientation() {
	var height = window.innerHeight;
	var width = window.innerWidth;

	return (width > height) ? 'landscape' : 'portrait';
}

// binds menu show and hide buttons to respective functions
$showMenu.click(showMenu);
$hideMenu.click(hideMenu);

// binds reset map button
$mapReset.click(mapReset);
