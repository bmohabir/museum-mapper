var viewModel = function() {
	var self = this;

	model.museumsData.forEach(function(museum, id) {
		model.museums.push(ko.observable(new Museum(museum, id)));
	});

	self.searchQuery = ko.observable('');
	self.visibleIds = ko.observableArray();
	self.visibleMuseums = ko.computed(function() {
		var vM = ko.observableArray();

	}, self)
};

ko.applyBindings(new viewModel());

// ICC Systems, Christian Delgado
