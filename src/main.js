import { Flu } from './flu';
import { Map } from './map';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let mapElement = document.getElementById('map');
  // let newData = new Flu();
  // newData.getData(days)

  let map = null;
  let loadPromise = Map.loadMap();
  loadPromise.then(function(googleMaps) {
    map = Map.createMap(googleMaps, mapElement);
  }).catch(function(error) {
    console.error(error);
  });
});
