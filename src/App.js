import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { convertMillisecondsToDate } from './utils/convertTime';
import { getIcon, createIconSize } from './utils/icons';
import useEarthquakeData from './hooks/useEarthquakeData';

function App() {

  const mapCenter = [37.439181, -6.759908];

  const { earthquakeData } = useEarthquakeData();

  const redCircleIcon = require("./icon/icons8-red-circle-48.png");

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

            const iconSize = createIconSize(earthquake.properties.mag)
            
            return (
              <Marker
                key={earthquake.id}
                position={[
                  earthquake.geometry.coordinates[1],
                  earthquake.geometry.coordinates[0]
                ]}
                icon={getIcon(iconSize, redCircleIcon)}
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
