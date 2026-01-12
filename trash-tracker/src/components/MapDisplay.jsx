import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createIcon = (color) => new L.DivIcon({
  html: `
    <div style="
      background-color: ${color}; 
      width: 28px; 
      height: 28px; 
      border-radius: 50%; 
      border: 3px solid white; 
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="width: 6px; height: 6px; background: white; border-radius: 50%;"></div>
    </div>`,
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 28]
});

const greenIcon = createIcon('#4CAF50');
const redIcon = createIcon('#F44336');

function MapFocus({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 17, {
        duration: 1.5
      });
    }
  }, [coords, map]);
  return null;
}

export default function MapDisplay({ selectedCan, onSelectCan, trashcans }) {
  const GENT_CENTER = [51.0543, 3.7245];

  //convert trashcan.long and trashcan.lat to [long, lat]

  return (
    <MapContainer 
      center={GENT_CENTER} 
      zoom={14} 
      style={{ height: '100%', width: '100%' }} 
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trashcans.map((can) => (
        <Marker
          key={can.id}
          position={[can.lat, can.long]} // ✅ lat first!
          icon={can.is_full ? redIcon : greenIcon}
          eventHandlers={{
            click: () => onSelectCan(can),
          }}
        />
      ))}

      {selectedCan && <MapFocus coords={selectedCan.coords} />}
    </MapContainer>
  );
}