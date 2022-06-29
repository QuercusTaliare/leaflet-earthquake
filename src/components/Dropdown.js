export default function Dropdown({ label, value, onChange }) {
  
  /* https://www.robinwieruch.de/react-dropdown/ */

  const magnitudeOptions = [
      { label: 'All', value: 'all'},
      { label: '1.0+', value: 'onePlus'},
      { label: '2.5+', value: 'twoPointFivePlus'},
      { label: '4.5+', value: 'fourPointFivePlus'}
  ];
  
  return (
    <>
    <label htmlFor="magnitude-select">{label}</label>
    <select value={value} onChange={onChange} id="magnitude-select" name="magnitude">
      {
        magnitudeOptions.map((option) => {
          return (
            <option value={option.value} key={option.value}>{option.label}</option>
          )
        })
      }
    </select>
    </>
  )
}