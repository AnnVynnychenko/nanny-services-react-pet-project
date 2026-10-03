import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import Layout from './Layout';
import PrivateRoute from '../routes/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const NanniesPage = lazy(() => import('../pages/NanniesPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nannies" element={<NanniesPage />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute element={<FavoritesPage />} redirectTo="/" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          removeDelay: 1000,
        }}
      />
    </>
  );
}

export default App;
