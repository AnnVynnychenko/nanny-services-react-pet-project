import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import NanniesPage from '../pages/NanniesPage';
import FavoritesPage from '../pages/FavoritesPage';
import NannyDetails from './NannyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="nannies" element={<NanniesPage />}>
          <Route path="details" element={<NannyDetails />} />
        </Route>
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
