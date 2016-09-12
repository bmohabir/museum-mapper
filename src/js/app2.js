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
	* Populates `model.museums` using `model.museumsData`
	*/
	(function init() {
		model.museumsData.forEach(function(museum, id) {
			model.museums.push(new Museum(museum, id));
		});
	})();

	/**
	* Bound to DOM search box input
	*/
	self.searchQuery = ko.observable('');
	/**
	* Stores most recent search results for comparing with current results
	*/
	self.lastVM = [];
	/**
	* Computes to results for current `searchQuery`, calls `filterMarkers`
	*/
	self.visibleMuseums = ko.computed(function() {
		// so we can use `ko.observableArray.remove`
		var vM = ko.observableArray();
		// search should be case insensitive
		var searchQuery = self.searchQuery().toLowerCase();

		model.museums.forEach(function(museum) {
			var museumName = museum.name.toLowerCase();

			if (museumName.search(searchQuery) == -1) {
				// update marker visibility and DOM search results list
				museum.visible(false);
				vM.remove(museum);
			} else {
				museum.visible(true);
				vM.push(museum);
			}
		});
		// check if results have changed to avoid unnecessary updates
		if (!arraysEqual(vM(), self.lastVM)) {
			filterMarkers();
			self.lastVM = vM();
			return vM();
		}
		return vM();
	}, self)
	/**
	* Fires when bound DOM list item is clicked, calls `menuSelMarker` with
	* museum `id` property as parameter
	*/
	self.clickItem = function(item) {
		menuSelMarker(item);
	};
	/**
	* Fires when bound DOM list star is clicked, toggles fav status in list
	* and calls `markerToggleFav` to toggle marker fav status
	*/
	self.toggleFav = function(item) {
		item.fav() ? item.fav(false) : item.fav(true);
		menuToggleFav(item);
	}
};

/**
* Contains viewModel object
*/
var viewModel = new ViewModel();
// initializes the viewmodel
ko.applyBindings(viewModel);
