// Knockout ViewModel class constructor
var ViewModel = function() {
	// for preserving current 'this'
	var self = this;

	// populate observableArray using data from model.museumsData
	model.museumsData.forEach(function(museum, id) {
		model.museums.push(ko.observable(new Museum(museum, id)));
	});

	// bound to search box input
	self.searchQuery = ko.observable('');
	// stores computed visible museums for previous
	// query to compare with current result
	self.lastVM = [];
	self.visibleMuseums = ko.computed(function() {
		// use observable array for Knockout remove() method
		var vM = ko.observableArray();
		// search should be case insensitive
		var searchQuery = self.searchQuery().toLowerCase();

		ko.utils.arrayForEach(model.museums(), function(museum) {
			var museumName = museum().name.toLowerCase();

			if (museumName.search(searchQuery) == -1) {
				museum().visible(false);
				vM.remove(museum);
			} else {
				museum().visible(true);
				vM.push(museum);
			}
		});
		// check if visibleMuseums has actually changed
		// used to prevent unnecessary marker updates
		if (!arraysEqual(vM(), self.lastVM)) {
			filterMarkers();
			self.lastVM = vM();
			return vM();
		}

		return vM();
	}, self)
	// bound to clicks on menu list items
	self.clickItem = function(item) {
		menuInfoWindow(item.id);
	};
};

// initializes the viewmodel
ko.applyBindings(new ViewModel());
