import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ element, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
