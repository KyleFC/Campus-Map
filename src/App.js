// App.js or your main component file

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchBox from './components/SearchBox';
import Parameters from './components/Parameters';
import Legend from './components/Legend';
import './App.css'; // your custom styles

function App() {
  return (
    <div className="app">
      <Parameters />
      <div className="map-wrapper">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {[17, 33.65348, -117.81032]}
        </MapContainer>
        <SearchBox />
        <Legend />
      </div>
    </div>
  );
}

export default App;
