import 'https://cdn.jsdelivr.net/npm/ol@latest/ol.css';
import Map from 'https://cdn.jsdelivr.net/npm/ol@latest/ol/Map.js';
import View from 'https://cdn.jsdelivr.net/npm/ol@latest/ol/View.js';
import TileLayer from 'https://cdn.jsdelivr.net/npm/ol@latest/ol/layer/Tile.js';
import OSM from 'https://cdn.jsdelivr.net/npm/ol@latest/ol/source/OSM.js';

// Configura y crea el mapa
const map = new Map({
  target: 'map', // ID del elemento donde se mostrará el mapa
  layers: [
    new TileLayer({
      source: new OSM() // Fuente de OpenStreetMap
    })
  ],
  view: new View({
    center: [0, 0], // Coordenadas en proyección EPSG:3857 (puedes ajustar estas coordenadas)
    zoom: 2
  })
});