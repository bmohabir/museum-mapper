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
	/**
	* Computes to results for current `searchQuery`, calls `filterMarkers`
	*/
	self.visibleMuseums = ko.computed(function() {
		// so we can use `ko.observableArray.remove`
		var vM = ko.observableArray();
		var vIDs = ko.observableArray();
		// search should be case insensitive
		var searchQuery = this.searchQuery().toLowerCase();

		model.museums.forEach(function(museum, id) {
			var museumName = museum.name.toLowerCase();

			if (museumName.search(searchQuery) == -1) {
				vIDs.remove(id);
				vM.remove(museum);
			} else {
				vIDs.push(id);
				vM.push(museum);
			}
		});

		// check if results have changed to avoid unnecessary updates
		if (!arraysEqual(vIDs(), this.lastResults)) {
			// pass results to marker handler
			filterMarkers(vIDs());
			this.lastResults = vIDs();
			return vM();
		}

		return vM();
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
};

/**
* Contains viewModel object
*/
var viewModel = new ViewModel();
// initializes the viewmodel when DOM is ready
$(ko.applyBindings(viewModel));
