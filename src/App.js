import './App.css';
import Map from './components/Map';
import Dropdown from './components/Dropdown';
import useForm from './hooks/useForm';
import useMagnitudeUrl from './hooks/useMagnitudeUrl';

function App() {

  const { values, updateValue } = useForm({
    magnitude: ''
  })

  const { earthquakeUrl } = useMagnitudeUrl(values.magnitude);

  return (
    <div>
      <header>
        <h1>Leaflet Test Three</h1>
      </header>

      <Map 
        url={earthquakeUrl}
      />

      <fieldset>
        <legend>Magnitude</legend>
        <Dropdown 
          label="Choose the magnitude: "
          value={values.magnitude}
          onChange={updateValue}
        />
      </fieldset>

    </div>

  );
}

export default App;
