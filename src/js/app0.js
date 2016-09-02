// this section handles showing and hiding the sidebar menu

function showMenu() {
	$('#slide-menu').width(240);
}

function hideMenu() {
	$('#slide-menu').width(0);
}

$('#show-menu').click(showMenu);
$('#hide-menu').click(hideMenu);