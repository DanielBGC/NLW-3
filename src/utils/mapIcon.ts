import leaflet from 'leaflet';
import mapMarkerImg from '../assets/map-marker.svg';

const mapIcon = leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -60]
  })

export default mapIcon;