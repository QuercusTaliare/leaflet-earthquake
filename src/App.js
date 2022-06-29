import './App.css';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import useForm from './hooks/useForm';
import useMagnitudeUrl from './hooks/useMagnitudeUrl';

function App() {

  const { values, updateValue } = useForm({
    magnitude: ''
  })

  const { earthquakeUrl } = useMagnitudeUrl(values.magnitude);

  const magnitudeOptions = [
      { label: 'All', value: 'all'},
      { label: '1.0+', value: 'onePlus'},
      { label: '2.5+', value: 'twoPointFivePlus'},
      { label: '4.5+', value: 'fourPointFivePlus'}
  ];

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
