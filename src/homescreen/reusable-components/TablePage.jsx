import { Typography, Stack, Button } from '@mui/material';
import CustomTable from './CustomTable.jsx';
import PageContainer from './PageContainer.jsx';
import { getDummyTable } from '../../data/dummyData.jsx';

export default function TablePage({ title, columns, rows, extra }) {
  const data = getDummyTable(title);
  const finalColumns = columns ?? data.columns;
  const finalRows = rows ?? data.rows;

  return (
    <PageContainer>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} gap={1}>
        <Typography variant="h6">{title}</Typography>
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined">Export</Button>
          <Button size="small" variant="contained">Add New</Button>
        </Stack>
      </Stack>
      {extra}
      <CustomTable columns={finalColumns} rows={finalRows} />
    </PageContainer>
  );
}
