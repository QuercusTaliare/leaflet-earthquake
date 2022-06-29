import { useEffect, useState } from 'react';

export default function useMagnitudeUrl(magnitude){

  // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  const [earthquakeUrl, setEarthquakeUrl] = useState("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");


  useEffect(() => {

    const magnitudeUrls = {
      all: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
      onePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson',
      twoPointFivePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
      fourPointFivePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'
    }

    if (magnitude === "all") {
      setEarthquakeUrl(magnitudeUrls.all)
    }
    if (magnitude === "onePlus") {
      setEarthquakeUrl(magnitudeUrls.onePlus)
    }
    if (magnitude === "twoPointFivePlus") {
      setEarthquakeUrl(magnitudeUrls.twoPointFivePlus)
    }
    if (magnitude === "fourPointFivePlus") {
      setEarthquakeUrl(magnitudeUrls.fourPointFivePlus)
    }

  }, [magnitude])

  return {
    earthquakeUrl
  }
}

