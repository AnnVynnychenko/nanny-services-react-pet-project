import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import NanniesPage from '../pages/NanniesPage';
import FavoritesPage from '../pages/FavoritesPage';
import NannyReviews from './NanniesList/NannyReviews';
import { PrivateRoute } from '../routes/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nannies" element={<NanniesPage />}>
            <Route path="details" element={<NannyReviews />} />
          </Route>
          <Route
            path="favorites"
            element={<PrivateRoute component={FavoritesPage} redirectTo="/" />}
          />
        </Route>
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
