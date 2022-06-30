import { useState, useEffect } from 'react';

export default function useEarthquakeData(url) {

  const [earthquakeData, setEarthquakeData] = useState([]);

  useEffect(() => {
    fetch(url)
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
      })
      .catch((error) => {
        console.log(error.message);
      })

  }, [url]);

  return {
    earthquakeData
  }
}