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
    this.geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/loganpowell/census-geojson/master/GeoJSON/500k/2017/american-indian-area!alaska-native-area!hawaiian-home-land.json").
      addTo(this.map);
  }

}
