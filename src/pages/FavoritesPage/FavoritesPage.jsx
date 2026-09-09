import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getFavorites } from '../../helpers/favoritesService';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    setFavorites(getFavorites());
  }

  useEffect(() => {
    loadFavorites();

    window.addEventListener('favoritesUpdated', loadFavorites);

    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  if (!favorites.length) {
    return <p>You haven't added any nannies to favorites yet.</p>;
  }

  return (
    <>
      <NanniesList nannies={favorites} isOnline={isOnline} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
    </>
  );
}

export default FavoritesPage;
