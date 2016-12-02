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
	data: '<div class="infowindow-data" data-bind="template: {name: ' +
		'\'infowindow-template\', data: infoWindowData }"></div>',
	star: `\`<div class="star"><a class="star-fav" href="#" \` +
		\`data-bind="visible: getMuseum(\${id}).fav(), click: \` +
		\`function() { toggleFav(getMuseum(\${id})) }">&#9733;\` +
		\`</a><a class="star-def" href="#" data-bind="visible: \` +
		\`!getMuseum(\${id}).fav(), click: function() { \` +
		\`toggleFav(getMuseum(\${id})) }">&#9734;</a></div>\``
};
