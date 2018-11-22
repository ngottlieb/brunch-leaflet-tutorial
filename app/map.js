import L from 'leaflet';
require("leaflet-ajax");

export default class Map {
  constructor(props) {
    this.map = L.map('mapid').setView([42, -100], 4);
    // see here for other tileLayer providers:
    // https://leaflet-extras.github.io/leaflet-providers
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.loadDataset();
  }

  loadDataset() {
    this.geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2017/american-indian-area!alaska-native-area!hawaiian-home-land.json",
        {
          onEachFeature: this.onEachFeature,
          style: this.setRandomFeatureColor
        }).
      addTo(this.map);
  }

  onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.NAME) {
      layer.bindPopup(feature.properties.NAME);
    }
  }

  setRandomFeatureColor(feature) {
    // from https://stackoverflow.com/questions/1484506/random-color-generator#1484514
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return {
      color: color
    };
  }
}
