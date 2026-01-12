import { MapPin, Navigation, RotateCcw, X, QrCode } from "lucide-react";

export default function EmptyInfoCard({ onClose, can }) {
  return (
    <div className="info-card">
      <button onClick={onClose} className="info-card-close-btn">
        <X size={18} />
      </button>
      <div className="info-card-content">
        <div className="info-card-icon-box info-card-icon-box--empty">
          <MapPin color="green" size={30} />
        </div>
        <div className="info-card-details">
          <h3>{can.name}</h3>
          <p className="address">{can.address}</p>
          <p className="status">
            <span className={`status-text-empty`}>
              {can.is_full ? "Full" : "Empty"}
            </span>
            <span className="status-time">
              {" "}
              - {can.lastUpdated ?? "nog niet gemeld"}
            </span>
          </p>
        </div>
        <QrCode size={28} color="#333" />
      </div>
      <div className="info-card-btn-row">
        <button className="info-card-btn-secondary--empty info-card-btn-secondary">
          <RotateCcw size={16} /> Meld als vol
        </button>
        <button className="info-card-btn-primary">
          <Navigation size={16} /> Route
        </button>
      </div>
    </div>
  );
}
