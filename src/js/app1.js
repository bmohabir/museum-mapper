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
* Stores HTML templates for info window content
* To use, simply call `eval` on the property containing the template you want to
* use inside a scope where the placeholders have been defined
*/
var infoWindowTemplates = {
	name: `\`<h3 class="infowindow-title">\${name}</h3>\``,
	photo: `\`<img src="\${photoURL}" alt="\${name}"\` +
		\`width="\${photoSize}" height="\${photoSize}">\``,
	icon: `\`<img src="\${iconURL}" alt="\${iconName}" width="\${iconSize}"\` +
		\`height="\${iconSize}">\``,
	star: `\`<div class="star"><a class="star-fav" href="#"\` +
		\`data-bind="visible: $root.getMuseum(\${id}).fav(), click: \` +
		\`$root.toggleFav($root.getMuseum(\${id}))">★</a><a class="star-def"\` +
		\` href="#" data-bind="visible: !$root.getMuseum(\${id}).fav(), \` +
		\`click: $root.toggleFav($root.getMuseum(\${id}))">☆</a></div>\``
};

/**
* Contains photo and icon sizes for use in info windows
*/
var img = {
	/**
	* Calculates desired Foursquare photo size based on viewport size
	* @returns {number}
	*/
	photoSize: function() {
		// TODO: media query logic
		return 200;
	},
	/**
	* Calculates desired Foursquare icon size based on viewport size
	* @returns {number}
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
         	id: id,
         	icon: markerIcon.def,
         	icons: {
         		def: markerIcon.def,
         		bounce: markerIcon.def_bounce
         	}
    	});

    	// set marker click to open infowindow
    	marker.addListener('click', function() {
        	selectMarker(this);
    	});
    	// add marker to `markers`
    	markers.push(marker);
	});

	// for adjusting viewport to contain all visible markers
	var bounds = new google.maps.LatLngBounds();

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
	var marker = markers[clickItem.id];
	var currentMarker = infoWindow.marker;

	if (currentMarker == marker) {
		// no need to select an already selected marker
		return;
	} else if (currentMarker) {
		// ensure only one marker is selected at a time
		deselectMarker(currentMarker);
	}

	marker.setAnimation(google.maps.Animation.BOUNCE);
	marker.setIcon(marker.icons.bounce);
	openInfoWindow(marker);
}

/**
* Cancels animation and closes infowindow for selected marker
* @parameter {object} marker - clicked marker object
*/
function deselectMarker(marker) {
	marker.setAnimation(null);
	marker.setIcon(marker.icons.def);
	infoWindow.marker = null;
	infoWindow.setContent('');
}

/**
* Opens info window containing `title` property of passed marker, ensuring only
* one info window is open at a time and calls `fourSquare` API function
* @parameter {object} marker - a Google Maps marker object
*/
function openInfoWindow(marker) {
	var name = marker.title;
	var id = marker.id;
	var nameElem = eval(infoWindowTemplates.name);
	var favStar = eval(infoWindowTemplates.star);
	var content = '<div class="infowindow-main">' + nameElem + favStar +
		'</div>';
	infoWindow.setContent(content);
	// call Foursquare API (runs asynchronously)
	fourSquare(marker);
    infoWindow.marker = marker;
    infoWindow.open(map, marker);
    infoWindow.addListener('closeclick', function() {
        // deselect marker if info window closed
        deselectMarker(marker);
    });
    var $infoWindow = $(".infowindow-main")[0];
	ko.applyBindings(viewModel, $infoWindow);
}

/**
* Updates open info window content with data from passed in
* Foursquare API response object
* @parameter {object} data - `venue` object subproperty of Foursquare API
* response object
* @parameter {object} marker - Google Maps marker object
*/
function updateInfoWindow(data, marker) {
	var name = marker.title;
	var id = marker.id;
	var icons = '';
	var iconSize = img.iconSize();
	data.categories.forEach(function(cat) {
		var iconURL = cat.icon.prefix + iconSize + cat.icon.suffix;
		var iconName = cat.name;
		icons += eval(infoWindowTemplates.icon);
	});
	var favStar = eval(infoWindowTemplates.star);
	var photoSize = img.photoSize();
	var sizeString = photoSize + 'x' + photoSize;
	var photoURL = data.bestPhoto.prefix + sizeString + data.bestPhoto.suffix;
	var nameElem = eval(infoWindowTemplates.name);
	var photoElem = eval(infoWindowTemplates.photo);
	var content = '<div class="infowindow"><div class="infowindow-main">' +
		nameElem + favStar + '</div><div class="infowindow-photo">' +
		photoElem + '<div class="infowindow-icons">' + icons + '</div></div>' +
		'</div>';
	infoWindow.setContent(content);
	infoWindow.open(map, marker);
	var $infoWindow = $(".infowindow-main")[0];
	ko.applyBindings(viewModel, $infoWindow);
}

/**
* Gets Foursquare API venue information for a museum and passes it to
* `updateInfoWindow` (runs asynchronously)
* @parameter {object} marker - Google Maps marker object
*/
function fourSquare(marker) {
	var venueID = viewModel.getMuseum(marker.id).fsID;
	var client_id = 'ZKNJGS3QLW32133NNDFHO0O2LLEMUPJ3IOHXDU4QA133NCKR';
	var client_secret = 'PB0I1OXTRWNMUCLE40OCD3TC1P3GFRJVI13AGBPMGZ5PZIDX';
	var version = 20160909;
	var urlPrefix = 'https://api.foursquare.com/v2/venues/';
	var url = urlPrefix + venueID +	'?client_id=' + client_id +
		'&client_secret=' + client_secret +	'&v=' + version;
	$.get({
		url: url,
		success: function(data) {
			var result = data.response.venue;
			updateInfoWindow(result, marker);
		},
		dataType: 'json',
		timeout: 5000
	}).fail(function() {
		// TODO: better error handling
		alert('Error loading Foursquare data');
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
