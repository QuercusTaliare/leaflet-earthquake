import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';

function App() {

  const mapCenter = [37.439181, -6.759908];

  const [earthquakeData, setEarthquakeData] = useState({});

  function convertMillisecondsToDate(milliseconds) {

    const dateObject = new Date(milliseconds);

    const humanDateFormat = dateObject.toLocaleString();

    return humanDateFormat

  }

  useEffect(() => {
    fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json()
      })
      .then((data) => {
        setEarthquakeData(data.features)
        console.log(data.features);
      })
      .catch((error) => {
        console.log(error.message);
      })

  }, []);

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
          earthquakeData.map((earthquake) => {

            const time = convertMillisecondsToDate(earthquake.properties.time);

            console.log(time);
            
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

      </MapContainer>
    </div>

  );
}

export default App;
