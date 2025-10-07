import { useEffect, useState } from 'react';
import { Box, Paper, Stack, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CustomTextInput from '../../homescreen/reusable-components/CustomTextInput.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const authed = localStorage.getItem('nc_authed') === 'true';
    if (authed) navigate('/', { replace: true });
  }, [navigate]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper sx={{ p: 4, width: 400 }} elevation={3}>
        <Typography variant="h6" mb={2}>Narsus Coffee — Admin Login</Typography>
        <Stack spacing={2}>
          <CustomTextInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          <CustomTextInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <Button
            variant="contained"
            onClick={() => {
              localStorage.setItem('nc_authed', 'true');
              navigate('/', { replace: true });
            }}
          >
            Sign In
          </Button>
          <MuiLink component={Link} to="/auth/forgot-password" underline="hover">Forgot password?</MuiLink>
        </Stack>
      </Paper>
    </Box>
  );
}
