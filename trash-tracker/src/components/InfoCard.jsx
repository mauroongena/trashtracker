import { MapPin, Navigation, RotateCcw, X, QrCode } from 'lucide-react';

export default function InfoCard({ can, onClose }) {
  return (
    <div style={styles.card}>
      <button onClick={onClose} style={styles.closeBtn}><X size={18} /></button>
      <div style={styles.cardContent}>
        <div style={styles.iconBox}><MapPin color="#4CAF50" size={30} /></div>
        <div style={{ flex: 1, marginLeft: '15px' }}>
          <h3 style={{ margin: 0, fontSize: '16px' }}>{can.name}</h3>
          <p style={{ margin: '2px 0', fontSize: '12px', color: '#999' }}>{can.address}</p>
          <p style={{ marginTop: '8px', fontSize: '13px' }}>
            <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>Empty</span> 
            <span style={{ color: '#888' }}> - {can.lastUpdated}</span>
          </p>
        </div>
        <QrCode size={28} color="#333" />
      </div>
      <div style={styles.btnRow}>
        <button style={styles.btnSec}><RotateCcw size={16} /> Meld als leeg</button>
        <button style={styles.btnPri}><Navigation size={16} /> Route</button>
      </div>
    </div>
  );
}

const styles = {
  card: { position: 'absolute', bottom: '30px', left: '15px', right: '15px', backgroundColor: 'white', borderRadius: '24px', padding: '20px', zIndex: 1001, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' },
  cardContent: { display: 'flex', alignItems: 'center', marginBottom: '15px' },
  iconBox: { backgroundColor: '#F0F9F0', padding: '12px', borderRadius: '15px' },
  closeBtn: { position: 'absolute', top: '15px', right: '15px', border: 'none', background: '#f0f0f0', borderRadius: '50%', padding: '4px' },
  btnRow: { display: 'flex', gap: '10px' },
  btnPri: { flex: 1, backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontWeight: 'bold' },
  btnSec: { flex: 1, backgroundColor: 'white', color: '#4CAF50', border: '2px solid #4CAF50', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontWeight: 'bold' }
};