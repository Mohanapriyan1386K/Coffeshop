import { Stack, Button } from '@mui/material';

export default function ActionButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <Button size="small" variant="outlined" onClick={() => {}}>Edit</Button>
      <Button size="small" color="error" variant="outlined" onClick={() => {}}>Delete</Button>
    </Stack>
  );
}
