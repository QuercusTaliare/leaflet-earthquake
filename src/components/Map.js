import './Map.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useMap } from 'react-leaflet';

import { convertMillisecondsToDate } from '../utils/convertTime';
import { getIcon, createIconSize } from '../utils/icons';

function useDimensions() {
  
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return { dimensions }
  
}

function Zoom() {

  const leafletMethods = useMap();

  const { dimensions } = useDimensions();

  if (dimensions.width <= 600) {
    leafletMethods.setZoom(1)
  }
  if (dimensions.width >= 601) {
    leafletMethods.setZoom(2)
  }

}

function Map({ data }) {
  const mapCenter = [37.439181, -6.759908];


  const redCircleIcon = require("../icon/icons8-red-circle-48.png");

  return (
    <div className="map-container-container">
      
      <MapContainer
        center={mapCenter}
        zoom={2}
        style={{ height: '100%', maxHeight: '100%' }}
      >
        <Zoom />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          data && data.map((earthquake) => {

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

export default Map;