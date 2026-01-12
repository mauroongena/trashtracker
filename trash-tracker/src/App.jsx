import React, { useMemo } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import { TRASHCANS } from './data/trashcans';
import Header from './components/Header';
import InfoCard from './components/InfoCard';
import MapDisplay from './components/MapDisplay';

function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedCan = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    return TRASHCANS.find(c => c.id === id) || null;
  }, [location.search]);

  const handleSelectCan = (can) => {
    if (can) {
      navigate(`/?id=${can.id}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Header />
      
      <MapDisplay 
        selectedCan={selectedCan} 
        onSelectCan={handleSelectCan} 
      />

      {selectedCan && (
        <InfoCard 
          can={selectedCan} 
          onClose={() => handleSelectCan(null)} 
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}