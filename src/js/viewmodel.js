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
		clickMarker(museum);
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
	* Fires when bound fav star is clicked, toggles fav status in list
	* and calls `markerToggleFav` to toggle marker fav status
	*/
	self.toggleFav = function(museum) {
		museum.toggleFav();
		markerToggleFav(museum, museum.fav());
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
	* Centers infowindow after content is loaded
	*/
	self.posInfoWindow = function() {
		reposInfoWindow();
	};
	/**
	* For making blank fsData object
	* @returns {object}
	*/
	self.newFsData = function() {
		var fsData = {
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

		return fsData;
	};
	/**
	* For making blank evData object
	* @returns {object}
	*/
	self.newEvData = function() {
		var evData = {
			noEvents: ko.observable(false),
			events: ko.observableArray()
		};

		return evData;
	};
	/**
	* Error data class
	* @constructor
	*/
	self.errorData = function() {
		this.src = ko.observable();
		this.codeStor = ko.observable();
		this.code = ko.computed({
			read: function() {
				var codeStor = this.codeStor();
				var code = codeStor ? codeStor + ' ' : false;

				return code;
			},
			write: function(code) {
				var codeStor = this.codeStor;
				codeStor(code);
			},
			owner: this,
			deferEvaluation: true
		});
		this.msg = ko.observable();
	};
	/**
	* Stores infowindow response data and methods for rendering
	*/
	self.infoWindowData = {
		fsData: self.newFsData(),
		evData: self.newEvData(),
		fsErrorData: new self.errorData(),
		evErrorData: new self.errorData(),
		fsStatus: ko.observable('ready'),
		evStatus: ko.observable('ready'),
		fsLoaded: function() {
			this.fsStatus('loaded');
		},
		evLoaded: function() {
			this.evStatus('loaded');
		},
		fsError: function() {
			this.fsStatus('error');
		},
		evError: function() {
			this.evStatus('error');
		},
		clearInfoWindow: function() {
			this.fsStatus('ready');
			this.evStatus('ready');
			this.fsData = self.newFsData();
			this.evData = self.newEvData();
			this.width(getihWidth());
		},
		width: ko.observable()
	};
};

/**
* Contains viewModel object
*/
var viewModel = new ViewModel();

// initializes the viewmodel when DOM is ready
$(ko.applyBindings(viewModel));
