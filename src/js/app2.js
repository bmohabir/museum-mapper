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

		model.museums.forEach(function(museum, id) {
			var museumName = museum.name.toLowerCase();

			if (museumName.search(searchQuery) !== -1) {
				vIDs.push(id);
				vM.push(museum);
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
	* with museum `id` property as parameter, also hides the menu if
	* view is too narrow
	*/
	self.clickItem = function(museum) {
		selectMarker(museum);

		if (isNarrow()) {
			hideMenu();
		}
	};
	/**
	* Fires when bound DOM list star is clicked, toggles fav status in list
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
	* Animates removing item from list
	* @parameter {object} element
	*/
	self.hideListItem = function(element) {
		if (element.nodeType === 1) {
			$(element).css('opacity', 1)
				.slideUp('fast')
				.animate({ opacity: 0 }, { queue: false, duration: 'slow'},
					function() {
						$(element).remove();
					}
				);
		}
	};
	/**
	* Animates adding item to list
	* @parameter {object} element
	*/
	self.showListItem = function(element) {
		if (element.nodeType === 1) {
			$(element).css('opacity', 0)
				.slideDown('fast')
				.animate({ opacity: 1 }, { queue: false, duration: 'slow'});
		}
	};
};

/**
* Contains viewModel object
*/
var viewModel = new ViewModel();
// initializes the viewmodel when DOM is ready
$(ko.applyBindings(viewModel));
