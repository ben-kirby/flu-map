const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  static loadMap() {
    return loadGoogleMapsApi({ key: process.env.GOOGLE_KEY });
  }

  static createMap(googleMaps, mapElement) {
    //call createHEat here
    return new googleMaps.Map(mapElement, {
      center: {
        lat: 38.5,
        lng: -96
      },
      zoom: 5
    });
  }

  // static createHeatMap(fluData){
  //   let pionts = [];
  //   fluData.forEach(){
  //     points.push(
  //       new
  //     )
  //   }
  // }



}

export { Map };
