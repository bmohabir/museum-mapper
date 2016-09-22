/**
* Used to store map markers
*/
var markers = [];

/**
* Stores marker icons
* All icons credit: Maps Icons Collection https://mapicons.mapsmarker.com
*/
var markerIcon = {
	def: 'img/def_marker.png',
	def_bounce: 'img/def_marker_bounce.png',
	fav: 'img/fav_marker.png',
	fav_bounce: 'img/fav_marker_bounce.png'
};

/**
* Stores HTML template strings for info window content
* For string literal templates, simply call `eval` on the property containing
* the template you want to use from within a scope where the placeholders have
* been defined
*/
var infoWindowTemplates = {
	root: '<div class="infowindow"></div>',
	head: '<div class="infowindow-head"></div>',
	foursquare: '<div class="foursquare center-text">Loading Foursquare data ' +
		'. . .</div>',
	eventful: '<div class="eventful center-text">Loading Eventful data . . .' +
		'</div>',
	name: `\`<h3 class="infowindow-title">\${name}</h3>\``,
	photo: `\`<div class="infowindow-photo"><img src="\${photoURL}" \` +
		\`alt="\${name}" width="\${photoSize}" height="\${photoSize}"></div>\``,
	icons: '<div class="infowindow-icons"></div>',
	icon: `\`<img src="\${iconURL}" alt="\${iconName}" width="\${iconSize}" \` +
		\`height="\${iconSize}">\``,
	errorMsg: `\`<span class="infowindow-error">Error retrieving \` +
		\`\${errorSrc} data (\${errorCode}\${errorMsg}).</span>\``,
	star: `\`<div class="star"><a class="star-fav" href="#" \` +
		\`data-bind="visible: $root.getMuseum(\${id}).fav(), click: \` +
		\`function() { $root.toggleFav($root.getMuseum(\${id})) }">★</a>\` +
		\`<a class="star-def" href="#" data-bind="visible: \` +
		\`!$root.getMuseum(\${id}).fav(), click: function() { \` +
		\`$root.toggleFav($root.getMuseum(\${id})) }">☆</a></div>\``
};

/**
* Contains photo and icon sizes for use in info windows
*/
var img = {
	/**
	* Calculates desired Foursquare photo size based on viewport size
	* @returns {number} - side dimension in pixels
	*/
	photoSize: function() {
		// TODO: media query logic
		return 120;
	},
	/**
	* Calculates desired Foursquare icon size based on viewport size
	* @returns {number} - side dimension in pixels
	*/
	iconSize: function() {
		// TODO: media query logic
		return 32;
	}
};

/**
* 'becomeadinosaur' map style from:
* https://snazzymaps.com/style/74/becomeadinosaur
*/
var mapStyle = [
	{
	    "elementType": "labels.text",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "landscape.natural",
	    "elementType": "geometry.fill",
	    "stylers": [
	    {
	        "color": "#f5f5f2"
	    },
	    {
	        "visibility": "on"
	    }]
	},
	{
	    "featureType": "administrative",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "transit",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi.attraction",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "landscape.man_made",
	    "elementType": "geometry.fill",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    },
	    {
	        "visibility": "on"
	    }]
	},
	{
	    "featureType": "poi.business",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi.medical",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi.place_of_worship",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi.school",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi.sports_complex",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    },
	    {
	        "visibility": "simplified"
	    }]
	},
	{
	    "featureType": "road.arterial",
	    "stylers": [
	    {
	        "visibility": "simplified"
	    },
	    {
	        "color": "#ffffff"
	    }]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "labels.icon",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    },
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road.highway",
	    "elementType": "labels.icon",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road.arterial",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    }]
	},
	{
	    "featureType": "road.local",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    }]
	},
	{
	    "featureType": "poi.park",
	    "elementType": "labels.icon",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "poi",
	    "elementType": "labels.icon",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "water",
	    "stylers": [
	    {
	        "color": "#71c8d4"
	    }]
	},
	{
	    "featureType": "landscape",
	    "stylers": [
	    {
	        "color": "#e5e8e7"
	    }]
	},
	{
	    "featureType": "poi.park",
	    "stylers": [
	    {
	        "color": "#8ba129"
	    }]
	},
	{
	    "featureType": "road",
	    "stylers": [
	    {
	        "color": "#ffffff"
	    }]
	},
	{
	    "featureType": "poi.sports_complex",
	    "elementType": "geometry",
	    "stylers": [
	    {
	        "color": "#c7c7c7"
	    },
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "water",
	    "stylers": [
	    {
	        "color": "#a0d3d3"
	    }]
	},
	{
	    "featureType": "poi.park",
	    "stylers": [
	    {
	        "color": "#91b65d"
	    }]
	},
	{
	    "featureType": "poi.park",
	    "stylers": [
	    {
	        "gamma": 1.51
	    }]
	},
	{
	    "featureType": "road.local",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [
	    {
	        "visibility": "on"
	    }]
	},
	{
	    "featureType": "poi.government",
	    "elementType": "geometry",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "landscape",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road",
	    "elementType": "labels",
	    "stylers": [
	    {
	        "visibility": "off"
	    }]
	},
	{
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	    {
	        "visibility": "simplified"
	    }]
	},
	{
	    "featureType": "road.local",
	    "stylers": [
	    {
	        "visibility": "simplified"
	    }]
	},
	{
	    "featureType": "road"
	},
	{
	    "featureType": "road"
	},
	{},
	{
	    "featureType": "road.highway"
	}
];

/**
* Creates map markers from `model.museumsData`, called by `initMap`
*/
function initMarkers() {
	model.museumsData.forEach(function(museum, id) {
    	var position = museum.location;
    	var title = museum.name;
    	var marker = new google.maps.Marker({
        	position: position,
        	title: title,
         	animation: google.maps.Animation.DROP,
         	// storing index is useful for identifying individually passed
         	// marker objects and their corresponding Museum objects
         	id: id,
         	icon: markerIcon.def,
         	// used to update and revert icon appearance when `selectMarker`
         	// and `deselectMarker` are called
         	icons: {
         		def: markerIcon.def,
         		bounce: markerIcon.def_bounce
         	}
    	});

    	// set marker click functionality
    	marker.addListener('click', function() {
        	selectMarker(this);
    	});

    	// add marker to `markers`
    	markers.push(marker);
	});

	// for adjusting viewport to contain all visible markers
	bounds = new google.maps.LatLngBounds();

    markers.forEach(function(marker) {
    	// add marker to map (make visible)
		marker.setMap(map);
		bounds.extend(marker.position);
	});

	// adjust viewport bounds
	map.fitBounds(bounds);
}

/**
* Animates selected marker and calls `openInfoWindow`
* @parameter {object} clickItem - marker or museum object
*/
function selectMarker(clickItem) {
	// allows either a museum or marker to trigger the marker selection
	var marker = markers[clickItem.id];
	var currentMarker = infoWindow.marker;

	// no need to select an already selected marker
	if (currentMarker == marker) {
		return;
	} else if (currentMarker) {
		// ensure only one marker is selected at a time
		deselectMarker(currentMarker);
	}

	// animate marker and use highlighted icon
	marker.setAnimation(google.maps.Animation.BOUNCE);
	marker.setIcon(marker.icons.bounce);

	openInfoWindow(marker);
}

/**
* Cancels animation, reverts icon and closes infowindow for selected marker
* @parameter {object} marker - clicked marker object
*/
function deselectMarker(marker) {
	marker.setAnimation(null);
	marker.setIcon(marker.icons.def);

	infoWindow.marker = null;
	infoWindow.setContent('');
}

/**
* Opens info window with title, fav star and loading message and calls
* `fourSquare` and `eventFul` API functions, ensures only one
* info window is open at a time
* @parameter {object} marker - a Google Maps marker object
*/
function openInfoWindow(marker) {
	var name = marker.title;
	var id = marker.id;
	var $name = $(eval(infoWindowTemplates.name));
	var $favStar = $(eval(infoWindowTemplates.star));
	var $head = $(infoWindowTemplates.head).append($name)
		.append($favStar);
	var $foursquare = $(infoWindowTemplates.foursquare);
	var $eventful = $(infoWindowTemplates.eventful);
	var $root = $(infoWindowTemplates.root).append($head)
		.append($foursquare)
		.append($eventful);
	var content = $root[0].outerHTML;

	infoWindow.setContent(content);
    infoWindow.marker = marker;
    infoWindow.open(map, marker);

    // call APIs (asynchronous)
	getFoursquareData(marker);
    getEventfulData(marker);

    // deselect marker if info window closed
    infoWindow.addListener('closeclick', function() {
        deselectMarker(marker);
    });

	// enables fav star KO binding, needed for dynamically injected elements
	var $infoWindowHead = $(".infowindow-head")[0];
	ko.applyBindingsToDescendants(viewModel, $infoWindowHead);
}

/**
* Refresh info window size and position without changing contents
*/
function refreshInfoWindow() {
	var marker = infoWindow.marker;

	infoWindow.open(map, marker);
}

/**
* Updates infowindow with Foursquare error info
* @parameter {object} data - Error data
*/
function foursquareRenderError(data) {
	var $foursquare = $('.foursquare').text('');
	var errorSrc = 'Foursquare';
	var errorMsg = data.text;
	// Ensure final error message makes sense
	var errorCode = (errorMsg === 'timeout') ? '' : (
		data.error > 0 ? data.error + ' ' : 'Unknown ');
	var $error = $(eval(infoWindowTemplates.errorMsg));

	$foursquare.append($error);

	refreshInfoWindow();
}

/**
* Updates infowindow with Foursquare API response data
* @parameter {object} data - Foursquare museum data
*/
function foursquareRenderInfo(data) {
	var marker = infoWindow.marker;
	var name = marker.title;
	var id = marker.id;
	var $foursquare = $('.foursquare').text('');
	var $icons = $(infoWindowTemplates.icons);
	var iconSize = img.iconSize();
	data.categories.forEach(function(cat) {
		var iconURL = cat.icon.prefix + iconSize + cat.icon.suffix;
		var iconName = cat.name;
		var $icon = $(eval(infoWindowTemplates.icon));
		$icons.append($icon);
	});
	var photoSize = img.photoSize();
	var sizeString = photoSize + 'x' + photoSize;
	var photoURL = data.bestPhoto.prefix + sizeString +
		data.bestPhoto.suffix;
	var $photo = $(eval(infoWindowTemplates.photo));

	$foursquare.removeClass('center-text')
		.append($icons)
		.append($photo);

	refreshInfoWindow();
}

/**
* Foursquare API callback function, called by `getFoursquareData` and calls
* `foursquareRenderInfo` with museum data
* @parameter {object} data - Foursquare API response JSON
*/
function fsSuccessCallback(data) {
	var result = data.response.venue;

	foursquareRenderInfo(result);
	//console.log(result); // for testing purposes
}

/**
* Foursquare API error handler, called by `getFoursquareData` and calls
* `foursquareRenderError` with error information
* @parameter {object} data - Error response object
*/
function fsErrorCallback(data) {
	var result = {
		error: data.status,
		text: data.statusText
	};

	if (data.responseJSON) {
		var type = data.responseJSON.meta.errorType;
		var detail = data.responseJSON.meta.errorDetail;

		// log detailed error messages to console
		console.log('Foursquare API error ' + type + ': ' + detail);
	}

	foursquareRenderError(result);
}

/**
* Gets museum information using Foursquare API and passes response to the
* appropriate callback function (runs asynchronously)
* @parameter {object} marker - Google Maps marker object
*/
function getFoursquareData(marker) {
	var venueID = viewModel.getMuseum(marker.id).fsID;
	var client_id = 'ZKNJGS3QLW32133NNDFHO0O2LLEMUPJ3IOHXDU4QA133NCKR';
	var client_secret = 'PB0I1OXTRWNMUCLE40OCD3TC1P3GFRJVI13AGBPMGZ5PZIDX';
	var version = 20160909;
	var urlPrefix = 'https://api.foursquare.com/v2/venues/';
	var url = urlPrefix + venueID +	'?client_id=' + client_id +
		'&client_secret=' + client_secret +	'&v=' + version;

	$.get({
		url: url,
		dataType: 'json',
		timeout: 10000,
		success: fsSuccessCallback,
		error: fsErrorCallback
	});
}

/**
* Updates infowindow with Eventful error info
* @parameter {object} data - Error data
*/
function eventfulRenderError(data) {
	var $eventful = $('.eventful').text('');
	var errorSrc = 'Eventful';
	var errorCode = data.error > 1 ? data.error + ' ' : '';
	var errorMsg = data.text;
	var $error = $(eval(infoWindowTemplates.errorMsg));

	$eventful.append($error);

	refreshInfoWindow();
}

/**
* Updates infowindow with Eventful API response data
* @parameter {object} data - Eventful museum data
*/
function eventfulRenderInfo(type, data) {
	var marker = infoWindow.marker;
	var name = marker.title;
	var id = marker.id;
	var $eventful = $('.eventful').text('');

	// TODO
	refreshInfoWindow();
}

/**
* Eventful API callback function, called by `getEventfulData` and calls
* `eventfulRenderInfo` or `evErrorCallback` based on structure of `data`
* @parameter {object} data - Eventful API response JSON
*/
function evSuccessCallback(data) {
	if (data.events) {
		var result = data.events.event;

		eventfulRenderInfo(result);
		console.log(result); // for testing purposes
	} else {
		// Eventful uses JSONP, so we need to manually pass unexpected
		// responses to the error handler
		evErrorCallback(data);
	}
}

/**
* Eventful API error handler, called by `getEventfulData` or `evSuccessCallback`
* and calls `eventfulRenderError` with error information
* @parameter {object} data - Error response object
*/
function evErrorCallback(data) {
	if (data.error) {
		// For error response from Eventful API
		var result = {
			error: data.error,
			text: data.status
		}

		// log detailed error messages to console
		console.log('Eventful API error ' + data.error + ': ' +
			data.description);

		eventfulRenderError(result);
	} else if (data.statusText) {
		// For other errors (ie. network issue)
		var result = {
			error: data.status,
			text: data.statusText
		};

		eventfulRenderError(result);
	} else {
		// For any errors without a known response structure
		var result = {
			error: 0,
			text: 'Unknown error'
		};

		eventfulRenderError(result);
	}

	//console.log(data); // for testing purposes
}

/**
* Gets Eventful API venue information for a museum and passes it to
* `updateInfoWindow` (runs asynchronously)
* @parameter {object} marker - Google Maps marker object
*/
function getEventfulData(marker) {
	var venueID = viewModel.getMuseum(marker.id).evID;
	var app_key = '52bmjJbHHhT48jbh'
	var urlPrefix = 'https://api.eventful.com/json/events/search?app_key=';
	var location = '&location=' + venueID;
	var url = urlPrefix + app_key + location;

	$.get({
		url: url,
		dataType: 'jsonp',
		// Eventful response tends to take a while
		timeout: 15000,
		success: evSuccessCallback,
		error: evErrorCallback
	});
}

/**
* Toggles marker fav status and updates icon accordingly
* @parameter {object} clickItem - marker or museum object
* @parameter {boolean} status - desired marker fav status
*/
function markerToggleFav(clickItem, status) {
	var marker = markers[clickItem.id];

	if (status) {
		marker.icons.def = markerIcon.fav;
		marker.icons.bounce = markerIcon.fav_bounce;
	} else {
		marker.icons.def = markerIcon.def;
		marker.icons.bounce = markerIcon.def_bounce;
	}
	if (marker.animation) {
		marker.setIcon(marker.icons.bounce);
	} else {
		marker.setIcon(marker.icons.def);
	}
}

/**
* Show or hide markers based on parameter, called by `viewModel.visibleMuseums`
* @parameter {array} visibleIDs - array of ids of visible markers
*/
function filterMarkers(visibleIDs) {
	markers.forEach(function(marker, id) {
		var markerVisible = !!marker.getMap();
		var visible = (visibleIDs.indexOf(id) !== -1) ? true : false;

		if (visible && !markerVisible) {
			marker.setMap(map);
		} else if (!visible && markerVisible) {
			marker.setMap(null);
		}
	});
}

/**
* Resets map view
*/
function mapReset() {
	map.fitBounds(bounds);
}

/**
* Check if two arrays are the same length and contain the same data
* @parameter {array} arr1 - first array to compare
* @parameter {array} arr2 - second array to compare
* @returns {boolean}
*/
function arraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (var i = arr1.length; i >= 0; i--) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}
