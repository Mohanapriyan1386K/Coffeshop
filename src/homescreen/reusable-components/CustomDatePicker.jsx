import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function CustomDatePicker({ label, value, onChange, sx }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} value={value} onChange={onChange} sx={sx} slotProps={{ textField: { size: 'small', fullWidth: true } }} />
    </LocalizationProvider>
  );
}
