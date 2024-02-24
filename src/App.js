// App.js or your main component file

import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // your custom styles

function App() {
  return (
    <div className="app">
      <div className="map-wrapper">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
