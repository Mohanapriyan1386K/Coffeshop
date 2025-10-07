import { TextField } from '@mui/material';

export default function CustomTextInput({ label, value, onChange, sx, type = 'text', placeholder }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      size="small"
      fullWidth
      sx={sx}
    />
  );
}
