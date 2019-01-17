import { Flu } from './flu';
import { Map } from './map';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let allFluData = null;
  let mapElement = document.getElementById('map');
  let map = null;
  let heatMap = null;

  Flu.getData(1).then(function(fluResponse) {
    return fluResponse.json();
  }).then(function(fluData) {
    allFluData = fluData;
    return Map.loadMap();
  }).then(function(googleMaps) {
    map = Map.createMap(googleMaps, mapElement);
    console.log("map", googleMaps);
    heatMap = Map.createHeatMap(googleMaps, map, allFluData);
  });
});
