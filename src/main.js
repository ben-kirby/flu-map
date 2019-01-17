import { Flu } from './flu';
import { Map } from './map';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let mapElement = document.getElementById('map');
  let map = null;

  Map.loadMap().then(function(googleMaps) {
    map = Map.createMap(googleMaps, mapElement);
    console.log("map", map);
    return Flu.getData(10);
  },
    function(error) {
    console.error(error);
  }).then(function(fluPromise) {
     return fluPromise.json();
  }).then(function(fluData) {
    console.log("flu", fluData[0]);
    let marker =  new googleMaps.Marker({ position: {lat: 45, lng: -90}, map: map});
  });
});
