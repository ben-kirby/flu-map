const loadGoogleMapsApi = require('load-google-maps-api')
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let mapElement = document.getElementById('map');
  let map = null;

  loadGoogleMapsApi({ key: process.env.GOOGLE_KEY }).then(function (googleMaps) {
    map = new googleMaps.Map(mapElement, {
      center: {
        lat: 40.7484405,
        lng: -73.9944191
      },
      zoom: 12
    })
  }).catch(function (error) {
    console.error(error)
  })
})
