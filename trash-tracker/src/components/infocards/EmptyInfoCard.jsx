import { MapPin, Navigation, RotateCcw, X, QrCode } from "lucide-react";

export default function EmptyInfoCard({ onClose, can }) {
  return (
    <article>
      <button onClick={onClose} className="info-card-close-btn">
        <X size={18} />
      </button>
      <div className="info-card-content">
        <div className="info-card-icon-box">
          <MapPin color="#4CAF50" size={30} />
        </div>
        <div className="info-card-details">
          <h3>{can.name}</h3>
          <p className="address">{can.address}</p>
          <p className="status">
            <span className={`status-text ${can.is_full ? "full" : "empty"}`}>
              {can.is_full ? "Full" : "Empty"}
            </span>
            <span className="status-time"> - {can.lastUpdated}</span>
          </p>
        </div>
        <QrCode size={28} color="#333" />
      </div>
      <div className="info-card-btn-row">
        <button className="info-card-btn-secondary">
          <RotateCcw size={16} /> Meld als leeg
        </button>
        <button className="info-card-btn-primary">
          <Navigation size={16} /> Route
        </button>
      </div>
    </article>
  );
}
