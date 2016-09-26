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
	foursquare: '<div class="foursquare center-text">Loading Foursquare data ' +
		'. . .</div>',
	eventful: '<div class="eventful center-text">Loading Eventful data . . .' +
		'</div>',
	fsMain: '<div class="foursquare-main"></div>',
	fsInfo: '<div class="foursquare-info"></div>',
	fsPhoto: `\`<div class="foursquare-photo"><img src="\${photoURL}" \` +
		\`alt="\${name}" width="\${photoSize}" height="\${photoSize}"></div>\``,
	address: `\`<div class="infotext-flex"><div>Address:&nbsp;</div><div>\` +
		\`\${lineOne}<br>\${lineTwo}</div></div>\``,
	phone: `\`<div>Phone: \${phone}</div>\``,
	hours: `\`<div class="infotext-flex"><div>Hours:&nbsp;</div><div>\` +
		\`\${hours}<br>\${status}</div></div>\``,
	media: '<span class=social-media></span>',
	facebook: `\`<a href="\${facebook}" target="_blank">Facebook</a>\``,
	twitter: `\`<a href="\${twitter}" target="_blank">Twitter</a>\``,
	fsLink: `\`<a href="\${fsURL}" target="_blank">Foursquare</a>\``,
	website: `\`<div>Website: <a href="\${url}" target="_blank">\${url}</a>\` +
		\`</div>\``,
	rating: `\`<div>Foursquare Rating: <span class="rating-text"\` +
		\`style="color:\${ratingColor}">\${rating}</span>/10</div>\``,
	fsIcons: '<div class="foursquare-icons"></div>',
	icon: `\`<img src="\${iconURL}" alt="\${iconName}" width="\${iconSize}" \` +
		\`height="\${iconSize}">\``,
	evHead: '<div><h4 class="eventful-title">Upcoming Events</h4></div>',
	eventItem: '<div class="infotext-flex"></div>',
	eventTime: `\`<div class="event-date">\${formattedDate}&nbsp;&nbsp;\` +
		\`</div>\``,
	eventLink: `\`<div class="event-link overflow-ellipsis"><a href="\` +
		\`\${eventURL}" target="_blank" title="\${title}">\${title}</a>\` +
		\`</div>\``,
	errorMsg: `\`<span class="infowindow-error">Error retrieving \` +
		\`\${errorSrc} data (\${errorCode}\${errorMsg}).</span>\``,
	star: `\`<div class="star"><a class="star-fav" href="#" \` +
		\`data-bind="visible: $root.getMuseum(\${id}).fav(), click: \` +
		\`function() { $root.toggleFav($root.getMuseum(\${id})) }">&#9733;\` +
		\`</a><a class="star-def" href="#" data-bind="visible: \` +
		\`!$root.getMuseum(\${id}).fav(), click: function() { \` +
		\`$root.toggleFav($root.getMuseum(\${id})) }">&#9734;</a></div>\``
};
