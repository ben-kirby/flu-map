import { Flu } from './flu';
import { Map } from './map';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let allFluData = null;
  let mapElement = document.getElementById('map');
  let map = null;
  let heatMap = null;

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
  Flu.getData(60).then(function(fluResponse) {
    // console.log(fluResponse.json());
    return fluResponse.json();
  })
  .then(function(fluData) {
    allFluData = fluData;
    console.log(allFluData);
    return Map.loadMap();
  }).then(function(googleMaps) {
    map = Map.createMap(googleMaps, mapElement);
    console.log("map", googleMaps);
    heatMap = Map.createHeatMap(googleMaps, map, allFluData);
  });
});
