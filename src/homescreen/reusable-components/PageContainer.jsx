import { Box } from '@mui/material';

export default function PageContainer({ children }) {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {children}
    </Box>
  );
}
