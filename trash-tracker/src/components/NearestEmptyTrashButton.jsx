import React from "react";
import { useMap } from "react-leaflet";
import { getDistanceInMeters } from "../utils/distance";

export default function NearestEmptyTrashButton({ userLocation, trashcans, onSelectCan }) {
  const map = useMap();

  const handleClick = () => {
    if (!userLocation) return;

    const emptyCans = trashcans.filter((c) => !c.is_full);
    if (emptyCans.length === 0) return;

    let nearest = emptyCans[0];
    let nearestDistance = getDistanceInMeters(userLocation, [nearest.lat, nearest.long]);

    for (const can of emptyCans) {
      const dist = getDistanceInMeters(userLocation, [can.lat, can.long]);
      if (dist < nearestDistance) {
        nearest = can;
        nearestDistance = dist;
      }
    }

    onSelectCan(nearest);
    map.flyTo([nearest.lat, nearest.long], 17, { duration: 1.5 });
  };

  return (
    <div style={{ position: "absolute", top: 70, right: 20, zIndex: 1001 }}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          border: "none",
          background: "#2196F3",
          color: "white",
          cursor: "pointer",
          zIndex: 1001,
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontSize: 14
        }}
      >
        Zoek vuilbak
      </button>
    </div>
  );
}
