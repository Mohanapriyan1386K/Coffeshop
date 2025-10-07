import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import routes from './routes.js';
import ProtectedRoute from './authscreen/ProtectedRoute.jsx';

// Auth screens
import Login from './authscreen/login/index.jsx';
import ForgotPassword from './authscreen/forgot-password/index.jsx';
import Otp from './authscreen/otp/index.jsx';
import PasswordChange from './authscreen/password-change/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without sidebar */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/otp" element={<Otp />} />
        <Route path="/auth/password-change" element={<PasswordChange />} />

        {/* App routes with sidebar - protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}> 
            {routes.flatMap((menu) => (
              menu.children?.map((child) => (
                <Route key={child.path} path={child.path} element={<child.component />} />
              ))
            ))}
            {/* Default landing */}
            <Route index element={<Navigate to="orders/orders" replace />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
