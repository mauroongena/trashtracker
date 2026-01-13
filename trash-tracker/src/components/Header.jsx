export default function Header() {
  return (
    <>
      <div className="header">
        <h1>TrashTracker</h1>
      </div>
      <div className="legend-container">
        <div className="legend-pill">
          <div className="legend-dot green" /> Leeg
          <div className="legend-dot red" /> Vol
        </div>
      </div>
    </>
  );
}
