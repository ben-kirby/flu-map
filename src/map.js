const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  static loadMap() {
    return loadGoogleMapsApi({ key: process.env.GOOGLE_KEY });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: {
        lat: 38.5,
        lng: -96
      },
      zoom: 5
    });
  }
}

export { Map };
