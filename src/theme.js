import { createTheme } from '@mui/material/styles';

// Coffee-inspired palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6F4E37', // coffee brown
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C0A080', // latte
    },
    background: {
      default: '#FAF7F2',
      paper: '#FFFFFF',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
    h6: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export default theme;
