export default function Header() {
  return (
    <>
      <div className="header">
        <h1>TrashTracker</h1>
        <p>Click on a trashcan</p>
      </div>
      <div className="legend-container">
        <div className="legend-pill">
          <div className="legend-dot green" /> Scan QR or click
        </div>
        <div className="legend-pill">
          <div className="legend-dot green" /> Empty
          <div className="legend-dot red" /> Full
        </div>
      </div>
    </>
  );
}
