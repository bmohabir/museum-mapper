/**
* Google Maps vars
*/
var map, bounds, infoWindow;

/**
* Used to store map markers
*/
var markers = [];

/**
* Stores marker icons for normal, fav and highlighted states
* All icons credit: Maps Icons Collection https://mapicons.mapsmarker.com
*/
var markerIcons = {
	def: {
		def: 'img/def_marker.png',
		bounce: 'img/def_marker_bounce.png',
	},
	fav: {
		def: 'img/fav_marker.png',
		bounce: 'img/fav_marker_bounce.png'
	}
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
* Callback function for Google Maps API
* loads map in '#map' div once API is loaded
*/
function initMap() {
	var $map = $('#map').removeClass('center-text')[0];

	map = new google.maps.Map($map, {
		center: {lat: 40.7413549, lng: -73.99802439999996},
		zoom: 13,
		// hide style/zoom/streetview UI
		disableDefaultUI: true,
		styles: mapStyle
	});

	infoWindow = new google.maps.InfoWindow();
	initMarkers();
}

/**
* Creates map markers from `model.museumsData`, called by `initMap`
*/
function initMarkers() {
	model.museumsData.forEach(function(museum, id) {
    	var position = museum.location;
    	var title = museum.name;
    	var favStatus = viewModel.getMuseum(id).fav();
    	var icon, icons;

    	if (storageAvailable && favStatus) {
    		icon = markerIcons.fav.def;
    		icons = markerIcons.fav;
    	} else {
    		icon = markerIcons.def.def;
    		icons = markerIcons.def;
    	}

    	var marker = new google.maps.Marker({
        	position: position,
        	title: title,
         	animation: google.maps.Animation.DROP,
         	// storing index is useful for identifying individually passed
         	// marker objects and their corresponding Museum objects
         	id: id,
         	icon: icon,
         	// used to update and revert icon appearance when `selectMarker`
         	// and `deselectMarker` are called
         	icons: icons
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
* Calls click event on marker corresponding to museum parameter value
* @parameter {object} museum - museum object
*/
function clickMarker(museum) {
	var marker = markers[museum.id];
	google.maps.event.trigger(marker,'click');
}

/**
* Animates selected marker and calls `openInfoWindow`
* also hides menu if view is too narrow
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

	if (isNarrow()) {
		hideMenu();
	}
}

/**
* Cancels animation, reverts icon and closes infowindow for selected marker
* Also calls viewModel.clearInfoWindow to clear data from previous marker
* @parameter {object} marker - clicked marker object
*/
function deselectMarker(marker) {
	marker.setAnimation(null);
	marker.setIcon(marker.icons.def);
	infoWindow.close();
	var infoWindowData = viewModel.infoWindowData;
	infoWindowData.clearInfoWindow();
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
	var $data = $(infoWindowTemplates.data);
	var $root = $(infoWindowTemplates.root).append($head)
		.append($data);
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
	var $infoWindow = $(".infowindow")[0];
	ko.applyBindingsToDescendants(viewModel, $infoWindow);
}

/**
* Refresh info window size and position
*/
function refreshInfoWindow() {
	var marker = infoWindow.marker;

	infoWindow.open(map, marker);
	// center the marker and then shift the map downward
	// by half of the infowindow height
	//var offset = $('.infowindow').height() / 2;
	//map.setCenter(marker.getPosition());
	//map.panBy(0, -1 * offset);

	// enables KO bindings, needed for dynamically injected elements
	var $infowindow = $(".infowindow")[0];
	ko.applyBindingsToDescendants(viewModel, $infowindow);
}

/**
* Centers infowindow
*/
function reposInfoWindow() {
	setTimeout(function() {
		var marker = infoWindow.marker;
		// TODO: fix this for better handling of small vheight
		var offset = ($('.infowindow').height() / 2) + 10;
		//console.log(offset);

		map.setCenter(marker.getPosition());
		map.panBy(0, -1 * offset);
	}, 500);
}

/**
* Gets width of .infowindow-head
* @returns {string} - width of .infowindow-head in pixels
*/
function getihWidth() {
	var $infowindowhead = $('.infowindow-head');

	return $infowindowhead.width() + 'px';
}

/**
* Updates infowindow with Foursquare error info
* @parameter {object} data - Error data
*/
function foursquareRenderError(data) {
	var infoWindowData = viewModel.infoWindowData;
	var error = infoWindowData.fsErrorData;
	var src = 'Foursquare';
	var msg = data.text;
	var code = (msg === 'timeout') ? null : (
		data.error > 0 ? data.error : 'Unknown' );
	error.src(src);
	error.msg(msg);
	error.code(code);

	infoWindowData.fsError();
}

/**
* Updates infowindow with Foursquare API response data
* @parameter {object} data - Foursquare museum data
*/
function foursquareRenderInfo(data) {
	var infoWindowData = viewModel.infoWindowData;
	var fsData = infoWindowData.fsData;
	var name = infoWindow.marker.title;
	fsData.name(name);

	// Icon bar for museum categories
	var iconSize = img.iconSize();
	var categories = [];
	fsData.iconSize(iconSize);
	data.categories.forEach(function(cat) {
		var category = {
			url: cat.icon.prefix + iconSize + cat.icon.suffix,
			name: cat.name
		};
		categories.push(category);
	});
	fsData.categories(categories);

	// Main museum photo
	var photoSize = img.photoSize();
	var sizeString = photoSize + 'x' + photoSize;
	var photoURL = data.bestPhoto.prefix + sizeString +
		data.bestPhoto.suffix;
	fsData.photoSize(photoSize);
	fsData.photo(photoURL);

	// Museum address
	var address = data.location.formattedAddress;
	fsData.address.lineOne(address[0]);
	fsData.address.lineTwo(address[1]);

	// Museum phone
	var phone = data.contact.formattedPhone;
	fsData.phone(phone);

	// Museum hours
	var hours = [];
	var timeframes = data.hours.timeframes;
	timeframes.forEach(function(tf) {
		var days = tf.days;
		var openTimes = '';
		var open = tf.open;
		var oLength = open.length;

		for (var i = 0; i < oLength; i++) {
			var times = open[i].renderedTime;
			openTimes += times;

			if (oLength > (i + 1)) {
				openTimes += ', ';
			}
		}

		hours.push(days + ' ' + openTimes);
	});
	fsData.hours(hours);

	// Current open/closed status
	var status = data.hours.status;
	var statusColor;
	var statusType = status.split(' ')[0];

	switch(statusType) {
		case 'Closed':
			statusColor = 'status-red';
			break;
		case 'Open':
			statusColor = 'status-blue';
			break;
		default:
			statusColor = 'status-orange';
	}
	fsData.status(status);
	fsData.statusColor(statusColor);

	// Foursquare rating
	var ratingColor = '#' + data.ratingColor;
	var rating = data.rating;
	fsData.rating(rating);
	fsData.ratingColor(ratingColor);

	// Museum website
	var url = data.url;
	fsData.url(url);

	// Social media links
	var facebook = data.contact.facebook ? (
			'https://www.facebook.com/' + data.contact.facebook
		) : null;
	fsData.socialMedia.facebook(facebook);

	var twitter = data.contact.twitter ? (
			'https://www.twitter.com/' + data.contact.twitter
		) : null;
	fsData.socialMedia.twitter(twitter);

	// Foursquare link
	var fsURL = data.canonicalUrl;
	fsData.socialMedia.foursquare(fsURL);

	infoWindowData.fsLoaded();
}

/**
* Foursquare API callback function, called by `getFoursquareData` and calls
* `foursquareRenderInfo` with museum data
* @parameter {object} data - Foursquare API response JSON
*/
function fsSuccessCallback(data) {
	var result = data.response.venue;

	foursquareRenderInfo(result);
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
* Checks if Foursquare data is populated in viewmodel
* @returns {boolean}
*/
function fsPopulated() {
	var infoWindowData = viewModel.infoWindowData;
	var fsStatus = infoWindowData.fsStatus();

	return (fsStatus === 'ready') ? false : true;
}

/**
* Updates infowindow with Eventful error info
* @parameter {object} data - Error data
*/
function eventfulRenderError(data) {
	// don't run until Foursquare data is populated
	if (!fsPopulated()) {
		setTimeout(function() {
			eventfulRenderError(data);
		}, 500);
	}

	var infoWindowData = viewModel.infoWindowData;
	var error = infoWindowData.evErrorData;
	var src = 'Eventful';
	var msg = data.text;
	var code = data.error > 1 ? data.error : null;
	error.src(src);
	error.msg(msg);
	error.code(code);

	infoWindowData.evError();
}

/**
* Updates infowindow width stored in viewmodel based on Foursquare elements
*/
function setWidth() {
	var infoWindowData = viewModel.infoWindowData;
	var $fsInfo = $('.foursquare-info');
	var currentWidth = ($fsInfo.width() + img.photoSize() + 5) + 'px';
	infoWindowData.width(currentWidth);
}

/**
* Updates infowindow with Eventful API response data
* @parameter {object} data - Eventful museum data
*/
function eventfulRenderInfo(data) {
	// don't run until Foursquare data is populated
	if (!fsPopulated()) {
		setTimeout(function() {
			eventfulRenderInfo(data);
		}, 500);
	}

	// preserve infowindow width from foursquare render
	setWidth();

	var infoWindowData = viewModel.infoWindowData;
	var evData = infoWindowData.evData;
	var events = [];

	if (data.length) {
		data.forEach(function(eventObj) {
			var startTime = eventObj.start_time;
			var date = startTime.split(' ')[0];
			var month = date.charAt(5) === '0' ? date.slice(6, 7) : (
				date.slice(5, 7) );
			var day = date.charAt(8) === '0' ? date.slice(9, 10) : (
				date.slice(8, 10) );
			var formattedDate = month + '/' + day;
			var title = eventObj.title;
			var eventURL = eventObj.url;
			var eventData = {
				date: formattedDate + '&nbsp;&nbsp;',
				title: title,
				url: eventURL
			};
			events.push(eventData);
		});
		evData.events(events);
	} else {
		evData.noEvents(true);
	}

	infoWindowData.evLoaded();
}

/**
* Eventful API callback function, called by `getEventfulData` and calls
* `eventfulRenderInfo` or `evErrorCallback` based on structure of `data`
* @parameter {object} data - Eventful API response JSON
*/
function evSuccessCallback(data) {
	if (data.total_items) {
		// data.events.event contains an array of event objects for multiple
		// events, but contains the event object itself for only one event
		var result = data.total_items > 0 ? Array.isArray(data.events.event) ? (
			data.events.event ) : [data.events.event] : [];

		eventfulRenderInfo(result);
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

	marker.icons = status ? markerIcons.fav : markerIcons.def;

	marker.animation ? marker.setIcon(marker.icons.bounce) : (
		marker.setIcon(marker.icons.def));
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
* Resets map view to initial state (if no infowindow open) or to
* initial infowindow view state (if infowindow is open)
*/
function mapReset() {
	infoWindow.map ? reposInfoWindow() : map.fitBounds(bounds);
}

// binds reset map button
$mapReset.click(mapReset);
