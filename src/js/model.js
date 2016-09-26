/**
* Museum class for museum info
* @constructor
* @param {object} obj - Museum data object
* @param {number} id - index of `obj` in museums data array
*/
var Museum = function(obj, id) {
	this.name = obj.name;
	// venue IDs for Foursquare and Eventful
	this.fsID = obj.fsID;
	this.evID = obj.evID;
	// fav status, checking for localStorage value if applicable
	this.fav = storageAvailable ? eval(localStorage.getItem('' + id)) ? (
		ko.observable(localStorage.getItem('' + id)) ) : (
		ko.observable(false) ) : ko.observable(false);
	// storing index is useful for identifying an
	// individually passed museum object
	this.id = id;

	/**
	* Toggles value of `this.fav`, also updating localStorage if applicable
	*/
	this.toggleFav = function() {
		var newValue = !this.fav();

		this.fav(newValue);

		if (storageAvailable) {
			localStorage.setItem('' + this.id, newValue);
		}
	};
};

/**
* Model class for all model data
* @constructor
*/
var Model = function() {
	/**
	* For keeping track of `this` (used by init function)
	*/
	var self = this;

	/**
	* Contains museum data objects
	*/
	this.museumsData = [
		/**
		* Museum data object
		* @property {string} name - Museum name
		* @property {object} location - contains lat-lng coordinates
		* @property {string} fsID - contains Foursquare venue ID
		* @property {string} evID - contains Eventful venue ID
		*/
		{
			name: 'American Folk Art Museum',
			location: {lat: 40.7733377, lng: -73.9813846},
			fsID: '4bc8ceda0687ef3bd7a3d8cc',
			evID: 'V0-001-002983483-2'
		},
		{
			name: 'American Museum of Natural History',
			location: {lat: 40.7813241, lng: -73.9739882},
			fsID: '4297b480f964a52062241fe3',
			evID: 'V0-001-000228984-0'
		},
		{
			name: 'Brooklyn Museum',
			location: {lat: 40.6712062, lng: -73.9636306},
			fsID: '427d5680f964a520a8211fe3',
			evID: 'V0-001-000229449-9'
		},
		{
			name: 'Intrepid Sea, Air & Space Museum',
			location: {lat: 40.7645266, lng: -73.9996076},
			fsID: '49f5135cf964a5208e6b1fe3',
			evID: 'V0-001-001711228-7'
		},
		{
			name: 'The Jewish Museum',
			location: {lat: 40.7854597, lng: -73.9571318},
			fsID: '4a746fb2f964a52025de1fe3',
			evID: 'V0-001-001084061-9'
		},
	    {
	    	name: 'The Metropolitan Museum of Art',
	    	location: {lat: 40.7794366, lng: -73.963244},
	    	fsID: '427c0500f964a52097211fe3',
	    	evID: 'V0-001-000228997-4'
	    },
	    {
	    	name: 'Museum of Arts and Design (MAD)',
	    	location: {lat: 40.7673947, lng: -73.9820338},
	    	fsID: '4a6cbb32f964a52076d11fe3',
	    	evID: 'V0-001-000447865-1'
	    },
	    {
	    	name: 'Museum of Modern Art',
	    	location: {lat: 40.7614327, lng: -73.9776216},
	    	fsID: '4af5a46af964a520b5fa21e3',
	    	evID: 'V0-001-000160557-3'
	    },
	    {
	    	name: 'Museum of the Moving Image',
	    	location: {lat: 40.7563454, lng: -73.9239496},
	    	fsID: '424de080f964a520aa201fe3',
	    	evID: 'V0-001-000448132-7'
	    },
	    {
	    	name: 'New York Hall of Science',
	    	location: {lat: 40.7473311, lng: -73.8517438},
	    	fsID: '45545fd1f964a520043d1fe3',
	    	evID: 'V0-001-007881154-7'
	    },
	    {
	    	name: 'New York Historical Society',
	    	location: {lat: 40.779306, lng: -73.97427},
	    	fsID: '4b48d37df964a520d55826e3',
	    	evID: 'V0-001-001084240-4'
	    },
	    {
	    	name: 'New York Transit Museum',
	    	location: {lat: 40.6904104, lng: -73.9898535},
	    	fsID: '45727340f964a520733e1fe3',
	    	evID: 'V0-001-001202380-9'
	    },
	    {
	    	name: 'Queens Museum',
	    	location: {lat: 40.74591, lng: -73.84689},
	    	fsID: '4a3d33ecf964a520f3a11fe3',
	    	evID: 'V0-001-007432321-1'
	    },
	    {
	    	name: 'Solomon R. Guggenheim Museum',
	    	location: {lat: 40.7829796, lng: -73.9589706},
	    	fsID: '41706480f964a520a51d1fe3',
	    	evID: 'V0-001-000439048-7'
	    },
	    {
	    	name: 'Whitney Museum of American Art',
	    	location: {lat: 40.7396091, lng: -74.0088604},
	    	fsID: '421a7600f964a5209d1f1fe3',
	    	evID: 'V0-001-000965487-6'
	    }
	];
	/**
	* Contains `Museum` objects, populated by `init`
	*/
	this.museums = [];

	/**
	* Populates `museums` using `museumsData`
	*/
	(function init() {
		self.museumsData.forEach(function(museum, id) {
			self.museums.push(new Museum(museum, id));
		});
	})();
};

/**
* Contains the model
*/
var model = new Model();
