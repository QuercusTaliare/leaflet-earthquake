import { useState, useEffect } from 'react';

export default function useEarthquakeData() {
  const [earthquakeData, setEarthquakeData] = useState([]);

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

  return {
    earthquakeData
  }
}