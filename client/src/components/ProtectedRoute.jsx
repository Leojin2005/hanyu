import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute() {
  const { user, isRestoringSession } = useSelector((state) => state.auth);

  if (isRestoringSession) return null;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
