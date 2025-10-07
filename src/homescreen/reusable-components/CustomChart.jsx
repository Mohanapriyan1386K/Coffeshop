import ReactApexChart from 'react-apexcharts';
import { Paper, Box } from '@mui/material';

export default function CustomChart({ title = 'Orders Trend', height = 280, series, options }) {
  const defaultOptions = {
    chart: { toolbar: { show: false }, foreColor: '#666' },
    stroke: { curve: 'smooth', width: 2 },
    dataLabels: { enabled: false },
    xaxis: { type: 'category' },
    yaxis: { labels: { formatter: (val) => Math.round(val) } },
    colors: ['#6F4E37', '#C0A080'],
    grid: { borderColor: '#eee' },
  };
  const defaultSeries = [
    { name: 'Orders', data: [10, 22, 18, 30, 26, 35, 40] },
    { name: 'Revenue', data: [5, 15, 12, 25, 21, 28, 33] },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ fontWeight: 700, mb: 1 }}>{title}</Box>
      <ReactApexChart options={options ?? defaultOptions} series={series ?? defaultSeries} type="area" height={height} />
    </Paper>
  );
}
