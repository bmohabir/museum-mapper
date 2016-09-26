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
	// delay search box focus due to some browsers canceling
	// CSS transitions halfway through
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

// binds menu show and hide buttons to respective functions
$showMenu.click(showMenu);
$hideMenu.click(hideMenu);

// complements media query for initial menu state and search box focus
// (prevents CSS media query opening and closing menu without user input)
$(function() {
	(!isNarrow()) ? (
		showMenu()
	) : (
		hideMenu()
	);
});
