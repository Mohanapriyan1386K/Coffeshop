import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute() {
  const location = useLocation();
  const isAuthed = typeof window !== 'undefined' && localStorage.getItem('nc_authed') === 'true';
  if (!isAuthed) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
