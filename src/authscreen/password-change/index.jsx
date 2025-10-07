import { useState } from 'react';
import { Box, Paper, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTextInput from '../../homescreen/reusable-components/CustomTextInput.jsx';

export default function PasswordChange() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper sx={{ p: 4, width: 400 }} elevation={3}>
        <Typography variant="h6" mb={2}>Set New Password</Typography>
        <Stack spacing={2}>
          <CustomTextInput label="New Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <CustomTextInput label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" />
          <Button variant="contained" onClick={() => navigate('/')}>Update Password</Button>
        </Stack>
      </Paper>
    </Box>
  );
}
