import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getFavorites } from '../../helpers/favoritesService';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { filterSwitch } from '../../helpers/filterSwitch';
import { CARDS_PER_PAGE } from '../../data/pagination';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { useAuth } from '../../hooks/useAuth';

function FavoritesPage() {
  const { user } = useAuth();
  const uid = user?.uid;

  const [favorites, setFavorites] = useState([]);
  const [activeFilterValue, setActiveFilterValue] = useState('A to Z');
  const [cardsLimit, setCardsLimit] = useState(CARDS_PER_PAGE);

  useEffect(() => {
    if (!uid) return;

    const handleFavoritesUpdate = () => {
      setFavorites(getFavorites(uid));
    };

    handleFavoritesUpdate();

    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);

    return () =>
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
  }, [uid]);

  const { visibleNannies, hasMore } = useMemo(() => {
    const filtered = filterSwitch(activeFilterValue, favorites);
    return {
      visibleNannies: filtered.slice(0, cardsLimit),
      hasMore: cardsLimit < filtered.length,
    };
  }, [activeFilterValue, favorites, cardsLimit]);

  function handleSelectFilter(filteredValue) {
    setActiveFilterValue(filteredValue);
    setCardsLimit(CARDS_PER_PAGE);
  }

  function handleLoadMore() {
    setCardsLimit(prev => prev + CARDS_PER_PAGE);
  }

  if (!favorites.length) {
    return <p>You haven't added any nannies to favorites yet.</p>;
  }

  return (
    <section>
      {favorites && (
        <NanniesFilter
          onSelectFilter={handleSelectFilter}
          activeFilterValue={activeFilterValue}
        />
      )}
      <NanniesList nannies={visibleNannies} isOnline={isOnline} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
      {hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
    </section>
  );
}

export default FavoritesPage;
