import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getFavorites } from '../../helpers/favoritesService';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { filterSwitch } from '../../helpers/filterSwitch';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [activeFilterValue, setActiveFilterValue] = useState('A to Z');

  function loadFavorites() {
    setFavorites(getFavorites());
  }

  useEffect(() => {
    loadFavorites();

    window.addEventListener('favoritesUpdated', loadFavorites);

    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  function handleSelectFilter(filteredValue) {
    setActiveFilterValue(filteredValue);
  }

  const visibleNannies = useMemo(() => {
    return filterSwitch(activeFilterValue, favorites);
  }, [favorites, activeFilterValue]);

  if (!favorites.length) {
    return <p>You haven't added any nannies to favorites yet.</p>;
  }

  return (
    <section>
      {favorites && <NanniesFilter onSelectFilter={handleSelectFilter} />}
      <NanniesList nannies={visibleNannies} isOnline={isOnline} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
    </section>
  );
}

export default FavoritesPage;
