import TablePage from '../reusable-components/TablePage.jsx';
import CustomChart from '../reusable-components/CustomChart.jsx';
import { Grid } from '@mui/material';

export default function Orders(){
  return (
    <TablePage
      title="Orders"
      extra={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomChart title="Orders & Revenue (Week)" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomChart title="Returns & Cancellations" />
          </Grid>
        </Grid>
      }
    />
  );
}
