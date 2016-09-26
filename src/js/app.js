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
		.append($('<hr>'))
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
		data.error > 0 ? data.error + ' ' : 'Unknown ' );
	var $error = $(eval(infoWindowTemplates.errorMsg));

	$foursquare.append($error);

	refreshInfoWindow();
}

/**
* Updates infowindow with Foursquare API response data
* @parameter {object} data - Foursquare museum data
*/
function foursquareRenderInfo(data) {
	// Foursquare section of infowindow
	var $foursquare = $('.foursquare').text('');
	// Used when evaluating certain templates
	var name = infoWindow.marker.title;

	// Icon bar for museum categories
	var $icons = $(infoWindowTemplates.fsIcons);
	var iconSize = img.iconSize();
	data.categories.forEach(function(cat) {
		var iconURL = cat.icon.prefix + iconSize + cat.icon.suffix;
		var iconName = cat.name;
		var $icon = $(eval(infoWindowTemplates.icon));
		$icons.append($icon);
	});

	// Main museum photo
	var photoSize = img.photoSize();
	var sizeString = photoSize + 'x' + photoSize;
	var photoURL = data.bestPhoto.prefix + sizeString +
		data.bestPhoto.suffix;
	var $photo = $(eval(infoWindowTemplates.fsPhoto));

	// Museum address
	var address = data.location.formattedAddress;
	var lineOne = address[0];
	var lineTwo = address[1];
	var $address = $(eval(infoWindowTemplates.address));

	// Museum phone
	var phone = data.contact.formattedPhone;
	var $phone = $(eval(infoWindowTemplates.phone));

	// Museum hours
	var hours = '';
	var timeframes = data.hours.timeframes;
	var tfLength = timeframes.length;

	for (var i = 0; i < tfLength; i++) {
		var days = timeframes[i].days;
		var openTimes = '';
		var open = timeframes[i].open;
		var oLength = open.length;

		for (var j = 0; j < oLength; j++) {
			var times = open[j].renderedTime;
			openTimes += times;

			if (oLength > (j + 1)) {
				openTimes += ', ';
			}
		}

		hours += days + ' ' + openTimes;

		if (tfLength > (i + 1)) {
			hours += '<br>';
		}
	}
	// Current open/closed/closing status
	var status;
	var currentStatus = data.hours.status;
	var statusType = currentStatus.split(' ')[0];

	switch(statusType) {
		case 'Closed':
			status = '<span class="status-red">' + currentStatus + '</span>';
			break;
		case 'Closing':
		case 'Closes':
			status = '<span class="status-orange">' + currentStatus + '</span>';
			break;
		case 'Open':
			status = '<span class="status-blue">' + currentStatus + '</span>';
			break;
		default:
			status = currentStatus;
	}

	var $hours = $(eval(infoWindowTemplates.hours));

	// Foursquare rating
	var ratingColor = '#' + data.ratingColor;
	var rating = data.rating;
	var $rating = $(eval(infoWindowTemplates.rating));

	// Museum website
	var url = data.url;
	var $website = $(eval(infoWindowTemplates.website));

	var $info = $(infoWindowTemplates.fsInfo).append($address)
		.append($phone)
		.append($hours)
		.append($rating)
		.append($website);

	// Social media links
	var $socialmedia = $(infoWindowTemplates.media);
	var socialmedia = [];

	if (data.contact.facebook) {
		var facebook = 'https://www.facebook.com/' + data.contact.facebook;
		var $facebook = $(eval(infoWindowTemplates.facebook));
		socialmedia.push($facebook);
	}

	if (data.contact.twitter) {
		var twitter = 'https://www.twitter.com/' + data.contact.twitter;
		var $twitter = $(eval(infoWindowTemplates.twitter));
		socialmedia.push($twitter);
	}

	var fsURL = data.canonicalUrl;
	var $fsLink = $(eval(infoWindowTemplates.fsLink));
	socialmedia.push($fsLink);

	var smLength = socialmedia.length;

	for (var i = 0; i < smLength; i++) {
		$socialmedia.append(socialmedia[i]);
		if (smLength > (i + 1)) {
			$socialmedia.append($('<span>&nbsp;|&nbsp;</span>'));
		}
	}

	$info.append($socialmedia);

	var $fsMain = $(infoWindowTemplates.fsMain).append($photo)
		.append($info);

	$foursquare.removeClass('center-text')
		.append($icons)
		.append($fsMain);

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
function eventfulRenderInfo(data) {
	var $infowindow = $('.infowindow');
	var currentWidth = $infowindow.width();
	var $evHead = $(infoWindowTemplates.evHead);
	var $noEvents = $(infoWindowTemplates.noEvents);
	var $eventful = $('.eventful').text('').removeClass('center-text')
		.append($evHead);

	data.length ? (
		data.forEach(function(eventObj) {
			var startTime = eventObj.start_time;
			var date = startTime.split(' ')[0];
			var month = date.charAt(5) === '0' ? date.slice(6, 7) : (
				date.slice(5, 7) );
			var day = date.charAt(8) === '0' ? date.slice(9, 10) : (
				date.slice(8, 10) );
			var formattedDate = month + '-' + day;
			var title = eventObj.title;
			var eventURL = eventObj.url;
			var $eventTime = $(eval(infoWindowTemplates.eventTime));
			var $eventLink = $(eval(infoWindowTemplates.eventLink));
			var $eventItem = $(infoWindowTemplates.eventItem).append($eventTime)
				.append($eventLink);

			$eventful.append($eventItem);
		})
	) : $eventful.append($noEvents);

	// prevent events section changing width of infowindow
	$infowindow.width(currentWidth);
	refreshInfoWindow();
}

/**
* Eventful API callback function, called by `getEventfulData` and calls
* `eventfulRenderInfo` or `evErrorCallback` based on structure of `data`
* @parameter {object} data - Eventful API response JSON
*/
function evSuccessCallback(data) {
	//console.log(data);
	if (data.total_items) {
		// data.events.event contains an array of event objects for multiple
		// events, but contains the event object itself for only one event
		var result = data.total_items > 0 ? Array.isArray(data.events.event) ? (
			data.events.event ) : [data.events.event] : [];

		eventfulRenderInfo(result);
		//console.log(result); // for testing purposes
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
	infoWindow.marker ? refreshInfoWindow() : map.fitBounds(bounds);
}

// binds reset map button
$mapReset.click(mapReset);
