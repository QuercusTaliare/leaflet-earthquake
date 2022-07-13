import { MenuItem, Box, TextField, FormHelperText } from "@mui/material";

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
      <TextField
        select
        name="magnitude"
        value={value}
        label={label}
        onChange={onChange}
        fullWidth
      >
        {
          magnitudeOptions.map((option) => {
            return (
              <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
            )
          })
        }
      </TextField>
      <FormHelperText>Will display earthquakes that occurred in the last day</FormHelperText>
    </Box>
  )
}