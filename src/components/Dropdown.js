import { Select, MenuItem, InputLabel, Box } from "@mui/material";

export default function Dropdown({ label, value, onChange }) {
  
  /* https://www.robinwieruch.de/react-dropdown/ */

  const magnitudeOptions = [
      { label: 'All', value: 'all'},
      { label: '1.0+', value: 'onePlus'},
      { label: '2.5+', value: 'twoPointFivePlus'},
      { label: '4.5+', value: 'fourPointFivePlus'}
  ];
  
  return (
    <Box width="250px">
      <InputLabel id="magnitude-select">{label}</InputLabel>
      <Select
        name="magnitude"
        value={value}
        label="Magnitude"
        onChange={onChange}
        labelId="magnitude-select"
        fullWidth
      >
        {
          magnitudeOptions.map((option) => {
            return (
              <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
            )
          })
        }
      </Select>
    </Box>
  )
}