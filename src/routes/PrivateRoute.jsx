import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ element, redirectTo = '/' }) {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
