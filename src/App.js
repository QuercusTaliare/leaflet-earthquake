import './App.css';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import useForm from './hooks/useForm';

function App() {

  const { values, updateValue } = useForm({
    magnitude: ''
  })

  const magnitudeOptions = [
      { label: 'All', value: 'all'},
      { label: '1.0+', value: 'onePlus'},
      { label: '2.5+', value: 'twoPointFivePlus'},
      { label: '4.5+', value: 'fourPointFivePlus'}
  ];

  
  // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  const [earthquakeUrl, setEarthquakeUrl] = useState("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");

  useEffect(() => {

    const magnitudeUrls = {
      all: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
      onePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson',
      twoPointFivePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
      fourPointFivePlus: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'
    }

    if (values.magnitude === "all") {
      setEarthquakeUrl(magnitudeUrls.all)
    }
    if (values.magnitude === "onePlus") {
      setEarthquakeUrl(magnitudeUrls.onePlus)
    }
    if (values.magnitude === "twoPointFivePlus") {
      setEarthquakeUrl(magnitudeUrls.twoPointFivePlus)
    }
    if (values.magnitude === "fourPointFivePlus") {
      setEarthquakeUrl(magnitudeUrls.fourPointFivePlus)
    }

  }, [values.magnitude])

  return (
    <div>
      <header>
        <h1>Leaflet Test Three</h1>
      </header>

      <Map 
        url={earthquakeUrl}
      />

      {/* https://www.robinwieruch.de/react-dropdown/ */}
      <fieldset>
        <legend>Magnitude</legend>
        <label htmlFor="magnitude-select">Choose the magnitude: </label>
        <select value={values.magnitude} onChange={updateValue} id="magnitude-select" name="magnitude">
          {
            magnitudeOptions.map((option) => {
              return (
                <option value={option.value} key={option.value}>{option.label}</option>
              )
            })
          }
        </select>

      </fieldset>

    </div>

  );
}

export default App;
