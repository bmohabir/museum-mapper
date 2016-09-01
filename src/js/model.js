var Museum = function(obj, id) {
	this.name = obj.name;
	this.id = id;
	this.visible = true;
};

var Model = function() {
	this.museumsData = [
		{name: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
	    {name: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
	    {name: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
	    {name: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
	    {name: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
	    {name: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
	];

	this.museums = ko.observableArray();
};

var model = new Model();
