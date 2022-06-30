import './App.css';
import Map from './components/Map';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import useForm from './hooks/useForm';
import useMagnitudeUrl from './hooks/useMagnitudeUrl';
import useEarthquakeData from './hooks/useEarthquakeData';

function App() {

  // Form
  const { values, updateValue } = useForm({
    magnitude: ''
  })

  // Get url based on form state
  const { earthquakeUrl } = useMagnitudeUrl(values.magnitude);

  // Fetch data based on url
  const { earthquakeData } = useEarthquakeData(earthquakeUrl);


  return (
    <div>
      <Header />

      <Map 
        data={earthquakeData}
      />

      <fieldset>
        <legend>Magnitude</legend>
        <Dropdown 
          label="Choose the magnitude: "
          value={values.magnitude}
          onChange={updateValue}
        />
      </fieldset>

      {
        !earthquakeData.length && <p>There are no earthquakes today with those parameters. Please search again or come back later.</p>
      }

    </div>

  );
}

export default App;
