/**
* Museum class for museum info
* @constructor
* @param {object} obj - Museum name, location and Foursquare venue id
* @param {number} id - index of `obj` in museums data array
*/
var Museum = function(obj, id) {
	this.name = obj.name;
	this.venueID = obj.venueID;
	this.visible = ko.observable(true);
	this.fav = ko.observable(false);
	this.id = id;
};

/**
* Model class for all model data
* @constructor
*/
var Model = function() {
	/**
	* Contains museum data objects
	*/
	this.museumsData = [
		/**
		* Museum data object
		* @property {string} name - Museum name
		* @property {object} location - contains lat-lng coordinates
		* @property {string} venueID - contains foursquare
		*/
		{
			name: 'American Museum of Natural History',
			location: {lat: 40.7813241, lng: -73.9739882},
			venueID: '4297b480f964a52062241fe3'
		},
		{
			name: 'Brooklyn Museum',
			location: {lat: 40.6712062, lng: -73.9636306},
			venueID: '427d5680f964a520a8211fe3'
		},
		{
			name: 'Intrepid Sea, Air & Space Museum',
			location: {lat: 40.7645266, lng: -73.9996076},
			venueID: '49f5135cf964a5208e6b1fe3'
		},
	    {
	    	name: 'The Metropolitan Museum of Art',
	    	location: {lat: 40.7794366, lng: -73.963244},
	    	venueID: '427c0500f964a52097211fe3'
	    },
	    {
	    	name: 'Museum of Modern Art',
	    	location: {lat: 40.7614327, lng: -73.9776216},
	    	venueID: '4af5a46af964a520b5fa21e3'
	    },
	    {
	    	name: 'Museum of the Moving Image',
	    	location: {lat: 40.7563454, lng: -73.9239496},
	    	venueID: '424de080f964a520aa201fe3'
	    },
	    {
	    	name: 'New York Historical Society',
	    	location: {lat: 40.779306, lng: -73.97427},
	    	venueID: '4b48d37df964a520d55826e3'
	    },
	    {
	    	name: 'Solomon R. Guggenheim Museum',
	    	location: {lat: 40.7289796, lng: -73.9589706},
	    	venueID: '41706480f964a520a51d1fe3'
	    }
	];
	/**
	* Contains `Museum` objects, populated by `viewModel.init`
	*/
	this.museums = ko.observableArray();
};

/**
* Contains the model
*/
var model = new Model();
