import { MapPin, Navigation, RotateCcw, X } from "lucide-react";
import { updateTrashcanStatus } from "../../data/trashcans/api.trashcan";

export default function FullInfoCard({ onClose, can, onUpdate }) {
  const handleMarkAsEmpty = async () => {
    await updateTrashcanStatus(can.id, false);
    if (onUpdate) await onUpdate();
  };
  return (
    <div className="info-card">
      <button onClick={onClose} className="info-card-close-btn">
        <X size={18} />
      </button>
      <div className="info-card-content">
        <div className="info-card-icon-box info-card-icon-box--full">
          <MapPin color="red" size={30} />
        </div>
        <div className="info-card-details">
          <h3>{can.name}</h3>
          <p className="address">{can.address}</p>
          <p className="status">
            <span className="status-text-full">
              {can.is_full ? "Full" : "Empty"}
            </span>
            <span className="status-time">
              {" "}
              - {can.last_updated ?? "nog niet gemeld"}
            </span>
          </p>
        </div>
      </div>
      <div className="info-card-btn-row">
        <button
          className="info-card-btn-secondary info-card-btn-secondary--full"
          onClick={handleMarkAsEmpty}
        >
          <RotateCcw size={16} /> Meld als leeg
        </button>
        <button className="info-card-btn-primary">
          <Navigation size={16} /> Route
        </button>
      </div>
    </div>
  );
}
