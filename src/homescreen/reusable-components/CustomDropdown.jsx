import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function CustomDropdown({ label, value, onChange, options = [], sx }) {
  return (
    <FormControl fullWidth sx={sx} size="small">
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={onChange}>
        {options.map((opt) => (
          <MenuItem key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
