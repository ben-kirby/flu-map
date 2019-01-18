const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
  static loadMap() {
    return loadGoogleMapsApi({ key: process.env.GOOGLE_KEY, libraries: ["visualization"] });
  }

  static createMap(googleMaps, mapElement) {
    const styles = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ];
    let styledMap = new googleMaps.StyledMapType(styles, {name: 'styledMap'});
    let map = new googleMaps.Map(mapElement, {
      center: {
        lat: 38.5,
        lng: -96
      },
      zoom: 4,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'styled_map']
      }
    });
    map.mapTypes.set('styled_map', styledMap);
    map.setMapTypeId('styled_map');
    return map;
  }

  static createFluMap(googleMaps, map, fluData){
    let points = [];
    fluData.forEach(function(tweet){
      let lat = tweet.latitude;
      let lng = tweet.longitude;

      points.push(new googleMaps.LatLng(lat, lng));
    });

    let heatMap = new googleMaps.visualization.HeatmapLayer({
      data: points,
      map: map,
      radius: 30
    });
  };

  static createFlightMap(googleMaps, map, flightData){
    flightData.states.forEach(function(each){
      let lat = parseFloat(each[6]);
      let lng = parseFloat(each[5]);
      let marker = new googleMaps.Marker({
        position: { lat: lat, lng: lng },
        map: map
      });
    });
  };
}

export { Map };
