# NYC Museums
A simple mapping app displaying locations and info for popular museums in NYC.

## Build Instructions
* Install dependencies: `npm install`
* Build project: `gulp build`
* Museum data is stored in `model.js`
* Info window HTML templates are stored in `templates.js`

## Using the App
Simply open `index.html` in an up-to-date web browser.

### Functionality
* The menu can be opened and closed using the hamburger icon and back arrow near the top left of the screen, respectively. The menu will auto-hide on smaller screen sizes when an info window is opened.
* The map view can be reset to show all markers (if no info window is open) or to show the open info window (if one is open) by clicking the Reset View button near the bottom right corner of the map.
* Click on a museum from the list or a map marker to open a window with info and events.
* Click the star next to a museum's name in either the list or info window to add the museum to your favorites. Favorites persist in `localStorage` if the app is closed or refreshed.
* Use the search box in the menu to filter museums and their corresponding markers by name.
* Use the radio buttons to choose between showing all museums or only favorited ones.

## Attributions
* Map powered by Google Maps API
* Map style is 'becomeadinosaur' from snazzymaps.com
* Map marker icons provided by Map Icons Collection (mapicons.mapsmarker.com)
* Museum photo, icons and information provided by Foursquare API
* Museum events provided by Eventful API
