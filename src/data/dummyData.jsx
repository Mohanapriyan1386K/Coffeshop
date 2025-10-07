import ActionButtons from '../homescreen/reusable-components/ActionButtons.jsx';

function generateRows(prefix, count = 8) {
  const statuses = ['Active', 'Pending', 'Disabled'];
  return Array.from({ length: count }).map((_, idx) => ({
    id: `${idx + 1}`,
    name: `${prefix} Item ${idx + 1}`,
    status: statuses[idx % statuses.length],
    createdAt: new Date(Date.now() - idx * 86400000).toISOString().slice(0, 10),
    actions: <ActionButtons />,
  }));
}

export function getDummyTable(key = 'List') {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'status', headerName: 'Status' },
    { field: 'createdAt', headerName: 'Created At' },
    { field: 'actions', headerName: 'Actions' },
  ];
  const rows = generateRows(key);
  return { columns, rows };
}
