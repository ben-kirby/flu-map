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

  document.getElementById("flu").addEventListener("click", function(){
    let days = document.getElementById('tweet-days').value
    if (days > 60) {
      days = 60;
    }
    console.log(days);
    Flu.getData(days).then(function(fluResponse){
      return fluResponse.json();
    }).then(function(fluData){
      allFluData = fluData;
      return Map.loadMap();
    }).then(function(googleMaps){
      map = Map.createMap(googleMaps, mapElement);
      Map.createFluMap(googleMaps, map, allFluData);
    });
  });

  document.getElementById("flight").addEventListener("click", function(){
    Flight.getData().then(function(flightResponse){
      return flightResponse.json();
    }).then(function(flightData){
      allFlightData = flightData;
      return Map.loadMap();
    }).then(function(googleMaps){
      map = Map.createMap(googleMaps, mapElement);
      Map.createFlightMap(googleMaps, map, allFlightData);
    });
  });
});
