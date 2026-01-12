export default function Header() {
  return (
    <>
      <div style={styles.header}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>TrashTracker</h1>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Click on a trashcan</p>
      </div>
      <div style={styles.legendContainer}>
        <div style={styles.pill}><div style={{...styles.dot, backgroundColor: '#4CAF50'}}/> Scan QR or click</div>
        <div style={styles.pill}>
          <div style={{...styles.dot, backgroundColor: '#4CAF50'}}/> Empty 
          <div style={{...styles.dot, backgroundColor: '#F44336', marginLeft: '10px'}}/> Full
        </div>
      </div>
    </>
  );
}

const styles = {
  header: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'white', padding: '15px', borderBottom: '4px solid #FFD700' },
  legendContainer: { position: 'absolute', top: '80px', left: '10px', right: '10px', zIndex: 1000, display: 'flex', justifyContent: 'space-between' },
  pill: { backgroundColor: 'white', padding: '8px 12px', borderRadius: '20px', fontSize: '11px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  dot: { width: '8px', height: '8px', borderRadius: '50%', marginRight: '5px' }
};