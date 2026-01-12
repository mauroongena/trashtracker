import React, { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import FullInfoCard from "./components/infocards/FullInfoCard";
import EmptyInfoCard from "./components/infocards/EmptyInfoCard";
import MapDisplay from "./components/MapDisplay";
import "./styles/app.css";


import { supabase } from "./lib/supabase";
import NearestEmptyTrashButton from "./components/NearestEmptyTrashButton";

function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const [trashcans, setTrashcans] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from("trashcans").select("*");

      if (error) {
        console.error(error);
      } else {
        setTrashcans(data);
      }
    };

    fetchTodos();

    // Setup realtime subscription
    const channel = supabase
      .channel('trashcans-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'trashcans'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setTrashcans((current) => [...current, payload.new]);
          } else if (payload.eventType === 'UPDATE') {
            setTrashcans((current) =>
              current.map((can) => 
                can.id === payload.new.id ? payload.new : can
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setTrashcans((current) =>
              current.filter((can) => can.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const selectedCan = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    return trashcans.find((c) => String(c.id) === id) || null;
  }, [location.search, trashcans]);

  const handleSelectCan = (can) => {
    if (can) {
      navigate(`/?id=${can.id}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Header />

      <MapDisplay
        trashcans={trashcans}
        selectedCan={selectedCan}
        onSelectCan={handleSelectCan}
      />

      {selectedCan &&
        (selectedCan.is_full ? (
          <FullInfoCard
            can={selectedCan}
            onClose={() => handleSelectCan(null)}
          />
        ) : (
          <EmptyInfoCard
            can={selectedCan}
            onClose={() => handleSelectCan(null)}
          />
        ))}
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
