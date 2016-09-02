// Museum class constructor
// Contains name to display and visibility state
// for Knockout bindings
var Museum = function(obj, id) {
	this.name = obj.name;
	this.visible = ko.observable(true);
	this.id = id;
};

// Model class constructor function
// Contains museum data used to populate
// map markers and Knockout bindings
var Model = function() {
	// contains museum data
	// name: string containing museum name
	// location: object containing lat and lng coordinates
	this.museumsData = [
		{name: 'American Museum of Natural History', location: {lat: 40.7813241, lng: -73.9739882}},
		{name: 'Brooklyn Museum', location: {lat: 40.6712062, lng: -73.9636306}},
		{name: 'Intrepid Sea, Air & Space Museum', location: {lat: 40.7645266, lng: -73.9996076}},
	    {name: 'The Metropolitan Museum of Art', location: {lat: 40.7794366, lng: -73.963244}},
	    {name: 'Museum of Modern Art', location: {lat: 40.7614327, lng: -73.9776216}},
	    {name: 'Museum of the Moving Image', location: {lat: 40.7563454, lng: -73.9239496}},
	    {name: 'New York Historical Society', location: {lat: 40.779306, lng: -73.97427}},
	    {name: 'Solomon R. Guggenheim Museum', location: {lat: 40.7289796, lng: -73.9589706}}
	];
	// used by Knockout list and search functionality
	this.museums = ko.observableArray();
};

// initializes the model
var model = new Model();
