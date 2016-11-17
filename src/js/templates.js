/**
* Stores HTML template strings for info window content
* For string literal templates, simply call `eval` on the property containing
* the template you want to use from within a scope where the placeholders have
* been defined
*/
var infoWindowTemplates = {
	root: '<div class="infowindow"></div>',
	head: '<div class="infowindow-head"></div>',
	name: `\`<h3 class="infowindow-title">\${name}</h3>\``,
	error: '<div data-bind="css: infoWindowError.cID, ' +
		'template: { name: \'error-template\', data: infoWindowError, ' +
		'afterRender: posInfoWindow }"></div>',
	foursquare: '<div class="foursquare" data-bind="template: { name: ' +
		'\'foursquare-template\', data: fsInfoWindow, afterRender: ' +
		'posInfoWindow }"></div>',
	eventful: '<div class="eventful" data-bind="template: { name: ' +
		'\'eventful-template\', data: evInfoWindow }, style: { maxWidth: ' +
		'iWidth }"></div>',
	star: `\`<div class="star"><a class="star-fav" href="#" \` +
		\`data-bind="visible: getMuseum(\${id}).fav(), click: \` +
		\`function() { toggleFav(getMuseum(\${id})) }">&#9733;\` +
		\`</a><a class="star-def" href="#" data-bind="visible: \` +
		\`!getMuseum(\${id}).fav(), click: function() { \` +
		\`toggleFav(getMuseum(\${id})) }">&#9734;</a></div>\``
};
