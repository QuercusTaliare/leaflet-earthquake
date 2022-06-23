import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';

import { convertMillisecondsToDate } from './utils/convertTime';
import useEarthquakeData from './hooks/useEarthquakeData';

function GetIcon(iconSize) {
  return L.icon({
    iconUrl: require("./icon/icons8-red-circle-48.png"),
    iconSize: iconSize
  })
}

function App() {

  // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  
  const mapCenter = [37.439181, -6.759908];

  const { earthquakeData } = useEarthquakeData();

  const redCircleIcon = L.icon({
    iconUrl: require("./icon/icons8-red-circle-48.png"),
    iconSize: [30, 30]
  })

  return (
    <div>
      <header>
        <h1>Leaflet Test Three</h1>
      </header>

      <MapContainer
        center={mapCenter}
        zoom={2}
        style={{ width: '100vw', height: '70vh' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          earthquakeData && earthquakeData.map((earthquake) => {

            const time = convertMillisecondsToDate(earthquake.properties.time);
            
            return (
              <Marker
                key={earthquake.id}
                position={[
                  earthquake.geometry.coordinates[1],
                  earthquake.geometry.coordinates[0]
                ]}
              >
                <Popup>
                  <div>
                    <p>{earthquake.properties.place}</p>
                    <p>Magnitude: {earthquake.properties.mag}</p>
                    <p>{time}</p>
                  </div>
                </Popup>

              </Marker>
            )
          })
        }
        <Marker
          key={1}
          position={[
            43.358802,
            -79.785148
          ]}
          icon={GetIcon([70,70])}
        >

        </Marker>

      </MapContainer>
    </div>

  );
}

export default App;
