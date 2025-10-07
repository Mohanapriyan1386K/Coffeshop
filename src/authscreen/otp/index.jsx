import { useState } from 'react';
import { Box, Paper, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTextInput from '../../homescreen/reusable-components/CustomTextInput.jsx';

export default function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper sx={{ p: 4, width: 400 }} elevation={3}>
        <Typography variant="h6" mb={2}>Enter OTP</Typography>
        <Stack spacing={2}>
          <CustomTextInput label="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <Button variant="contained" onClick={() => navigate('/auth/password-change')}>Verify</Button>
        </Stack>
      </Paper>
    </Box>
  );
}
