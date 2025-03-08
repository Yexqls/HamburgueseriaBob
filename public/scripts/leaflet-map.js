import "leaflet/dist/leaflet.css";
import L from "leaflet";

document.addEventListener('DOMContentLoaded', () => {
  const leafletMapElements = document.querySelectorAll('leaflet-map');

  leafletMapElements.forEach(element => {
    const latitude = parseFloat(element.dataset.latitude);
    const longitude = parseFloat(element.dataset.longitude);
    const zoom = parseInt(element.dataset.zoom, 10);
    const container = element.dataset.container;
    const tileLayer = element.dataset.tiles;
    const attribution = element.dataset.attribution;
    const containerStyle = element.dataset.containerstyle;

    const latLng = [latitude, longitude];

    const map = L.map(container).setView(latLng, zoom);

    L.tileLayer(tileLayer, { attribution }).addTo(map);
  });
});
