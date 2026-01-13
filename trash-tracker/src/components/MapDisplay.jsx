import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import fullTrashcanIcon from "../assets/trashcan-full2.svg";
import emptyTrashcanIcon from "../assets/trashcan-empty2.svg";
import fullTrashcanSelectedIcon from "../assets/trashcan-full2selected.svg";
import emptyTrashcanSelectedIcon from "../assets/trashcan-empty2selected.svg";
import NearestEmptyTrashButton from "./NearestEmptyTrashButton";

// Leaflet Icons
const fullIcon = new L.Icon({ iconUrl: fullTrashcanIcon, iconSize: [40, 40], iconAnchor: [16, 32], popupAnchor: [0, -32] });
const emptyIcon = new L.Icon({ iconUrl: emptyTrashcanIcon, iconSize: [40, 40], iconAnchor: [16, 32], popupAnchor: [0, -32] });
const userIcon = new L.DivIcon({
  html: `<div style="background:#2196F3;width:22px;height:22px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><div style="width:8px;height:8px;background:white;border-radius:50%;"></div></div>`,
  className: "",
  iconSize: [22, 22],
  iconAnchor: [11, 22],
});

// Map focus components
function MapFocus({ coords }) {
  const map = useMap();
  useEffect(() => { if (coords) map.flyTo(coords, 17, { duration: 1.5 }); }, [coords, map]);
  return null;
}

function UserLocationFocus({ coords }) {
  const map = useMap();
  useEffect(() => { if (coords) map.flyTo(coords, map.getZoom(), { duration: 1.2 }); }, [coords, map]);
  return null;
}

function MapClickHandler({ onClear }) {
  const map = useMap();
  useEffect(() => {
    const handleClick = () => onClear();
    map.on("click", handleClick);
    return () => map.off("click", handleClick);
  }, [map, onClear]);
  return null;
}

// Main Map Display
export default function MapDisplay({ selectedCan, onSelectCan, trashcans }) {
  const GENT_CENTER = [51.0543, 3.7245];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation([pos.coords.latitude, pos.coords.longitude]),
        (err) => { console.error(err); setUserLocation(null); }
      );
    }
  }, []);
  

  return (
    <MapContainer center={userLocation || GENT_CENTER} zoom={16} minZoom={12} maxZoom={18} style={{ height: "100%", width: "100%" }} zoomControl={false}>
      <MapClickHandler onClear={() => onSelectCan(null)} />
      <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {userLocation && <UserLocationFocus coords={userLocation} />}

      <NearestEmptyTrashButton userLocation={userLocation} trashcans={trashcans} onSelectCan={onSelectCan} />
      
      {trashcans.map((can) => {
        let icon;
        if (selectedCan && selectedCan.id === can.id) {
          icon = can.is_full ? fullTrashcanSelectedIcon : emptyTrashcanSelectedIcon;
        } else {
          icon = can.is_full ? fullIcon : emptyIcon;
        }

        const markerIcon = icon instanceof L.Icon ? icon : new L.Icon({
          iconUrl: icon,
          iconSize: [40, 40],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        return (
          <Marker
            key={can.id}
            position={[can.lat, can.long]}
            icon={markerIcon}
            eventHandlers={{ click: () => onSelectCan(can) }}
          />
        );
      })}
      {userLocation && <Marker position={userLocation} icon={userIcon} />}
      {selectedCan && <MapFocus coords={[selectedCan.lat, selectedCan.long]} />}
    </MapContainer>
  );
}
