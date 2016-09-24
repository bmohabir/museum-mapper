/**
* Determines if viewport is narrow for dynamic layout
* @returns {boolean}
*/
function isNarrow() {
	var width = window.innerWidth;

	return (width < 1000) ? true : false;
}

/**
* Determines if localStorage or sessionStorage is available
* @returns {string} - 'local', 'session' or 'none'
*/
var storageAvailable = (function() {
	var test = 'test';
	var outcome;
	try {
		localStorage.setItem(test, test);
		outcome = localStorage.getItem(test) === test;
		localStorage.removeItem(test);

		return outcome;
	} catch (exception) {
		return false;
	}
}());

/**
* Check if two arrays are the same length and contain the same data
* @parameter {array} arr1 - first array to compare
* @parameter {array} arr2 - second array to compare
* @returns {boolean}
*/
function arraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (var i = arr1.length; i >= 0; i--) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}
