var markers = [];

function initMarkers() {
	model.museumsData.forEach(function(loc, id) {
    	var position = loc.location;
    	var title = loc.name;

    	var marker = new google.maps.Marker({
        	position: position,
        	title: title,
         	animation: google.maps.Animation.DROP,
         	id: id
    	});

    	marker.addListener('click', function() {
        	makeInfoWindow(this, infoWindow);
    	});
    	markers.push(marker);
	});

	var bounds = new google.maps.LatLngBounds();

    markers.forEach(function(marker) {
		marker.setMap(map);
		bounds.extend(marker.position);
	});
	map.fitBounds(bounds);
}
