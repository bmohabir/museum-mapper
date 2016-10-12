/**
* Knockout ViewModel
* @constructor
*/
var ViewModel = function() {
	/**
	* Makes keeping track of `this` less confusing
	*/
	var self = this;

	/**
	* Bound to DOM search box input
	*/
	self.searchQuery = ko.observable('');
	/**
	* Used to filter list view to only show favorites
	*/
	self.onlyFavs = ko.observable('false');
	/**
	* Stores most recent search results for comparing with current results
	*/
	self.lastResults = [];
	self.lastFavs = [];
	self.lastNonFavs = [];
	/**
	* Computes to results for current `searchQuery`, calls `filterMarkers`
	*/
	self.visibleMuseums = ko.computed(function() {
		var vM = [];
		var vIDs = [];
		// search should be case insensitive
		var searchQuery = this.searchQuery().toLowerCase();
		var onlyFavs = eval(this.onlyFavs());

		model.museums.forEach(function(museum, id) {
			var museumName = museum.name.toLowerCase();

			if (museumName.search(searchQuery) !== -1) {
				if ((museum.fav() && onlyFavs) || !onlyFavs) {
					vIDs.push(id);
					vM.push(museum);
				}
			}
		});

		// check if results have changed to avoid unnecessary updates
		if (!arraysEqual(vIDs, this.lastResults)) {
			// pass results to marker handler
			filterMarkers(vIDs);
			this.lastResults = vIDs;

			return vM;
		}

		return vM;
	}, self);
	/**
	* Computes to results for current `searchQuery` where `fav` is `true`
	*/
	self.visibleFavs = ko.computed(function() {
		var vM = [];

		this.visibleMuseums().forEach(function(museum) {
			if (museum.fav()) {
				vM.push(museum);
			}
		});

		return vM;
	}, self);
	/**
	* Computes to results for current `searchQuery` where `fav` is `false`
	*/
	self.visibleNonFavs = ko.computed(function() {
		var vM = [];

		this.visibleMuseums().forEach(function(museum) {
			if (!museum.fav()) {
				vM.push(museum);
			}
		});

		return vM;
	}, self);
	/**
	* Fires when bound DOM list item is clicked, calls `menuSelMarker`
	* with museum `id` property as parameter
	*/
	self.clickItem = function(museum) {
		selectMarker(museum);
	};
	/**
	* Fires when bound fav star is clicked, toggles fav status in list
	* and calls `markerToggleFav` to toggle marker fav status
	*/
	self.toggleFav = function(museum) {
		museum.toggleFav();
		markerToggleFav(museum, museum.fav());
	};
	/**
	* Returns a single museum object by ID, called by view as needed
	* @parameter {number} id - id property (index) of museum
	* @returns {object} - museum object
	*/
	self.getMuseum = function(id) {
		return model.museums[id];
	};
	/**
	* Animates and removes item from list
	* @parameter {object} element
	*/
	self.hideListItem = function(element) {
		if (element.nodeType === 1) {
			$(element).slideUp('fast', function() {
				$(element).remove();
			});
		}
	};
	/**
	* Animates adding item to list
	* @parameter {object} element
	*/
	self.showListItem = function(element) {
		if (element.nodeType === 1) {
			$(element).hide().css('opacity', 0).slideDown('fast')
				.animate({ opacity: 1 }, { queue: false, duration: 'slow'});
		}
	};
	/**
	* Stores Foursquare infowindow data
	*/
	self.fsInfoWindow = {
		name: ko.observable(),
		categories: ko.observableArray(),
		iconSize: ko.observable(),
		photo: ko.observable(),
		photoSize: ko.observable(),
		address: {
			lineOne: ko.observable(),
			lineTwo: ko.observable()
		},
		phone: ko.observable(),
		hours: ko.observableArray(),
		status: ko.observable(),
		statusColor: ko.observable(),
		rating: ko.observable(),
		ratingColor: ko.observable(),
		url: ko.observable(),
		socialMedia: {
			facebook: ko.observable(),
			twitter: ko.observable(),
			foursquare: ko.observable()
		}
	};
	/**
	* Stores Eventful infowindow data
	*/
	self.evInfoWindow = {
		events: ko.observableArray()
	};
	/**
	* Stores infowindow error data
	*/
	self.infoWindowError = {
		src: ko.observable(),
		codeStor: ko.observable(),
		code: ko.computed({
			read: function() {
				var code = this.infoWindowError.codeStor() + ' ';

				return code;
			},
			write: function(code) {
				var codeStor = this.infoWindowError.codeStor;
				codeStor(code);
			},
			owner: self,
			deferEvaluation: true
		}),
		msg: ko.observable(),
		cID: ko.computed({
			read: function() {
				var src = this.infoWindowError.src();

				return src.toLowerCase();
			},
			owner: self,
			deferEvaluation: true
		})
	};
};

/**
* Contains viewModel object
*/
var viewModel = new ViewModel();

// initializes the viewmodel when DOM is ready
$(ko.applyBindings(viewModel));
