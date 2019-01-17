import { Flu } from './flu';
import { Flight } from './flight';
import { Map } from './map';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let allFluData = null;
  let allFlightData = null;
  let mapElement = document.getElementById('map');
  let map = null;

  // Flu.getData(60).then(function(fluResponse) {
  //   return fluResponse.json();
  // }).then(function(fluData) {
  //   allFluData = fluData;
  //   return Map.loadMap();
  // }).then(function(googleMaps) {
  //   map = Map.createMap(googleMaps, mapElement);
  //   console.log("map", googleMaps);
  //   heatMap = Map.createHeatMap(googleMaps, map, allFluData);
  // });
  Flight.getData(60).then(function(flightResponse) {
    return flightResponse.json();
  })
  .then(function(flightData) {
    allFlightData = flightData;
    return Map.loadMap();
  }).then(function(googleMaps) {
    map = Map.createMap(googleMaps, mapElement);
    Map.createFlightMap(googleMaps, map, allFlightData);
  });
});
