import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/Loader';

function PrivateRoute({ element, redirectTo = '/' }) {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <Loader fullPage />;
  }

  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
