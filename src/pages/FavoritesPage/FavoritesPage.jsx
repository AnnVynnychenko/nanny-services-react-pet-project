import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFavorites } from '../../helpers/favoritesService';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/nannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { filterSwitch } from '../../helpers/filterSwitch';
import { CARDS_PER_PAGE } from '../../data/pagination';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { useAuth } from '../../hooks/useAuth';
import { DEFAULT_FILTER } from '../../data/filterDefaultParam';
import { fetchNanniesByIds } from '../../api/nanniesApi';
import Loader from '../../components/Loader';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cardsLimit, setCardsLimit] = useState(CARDS_PER_PAGE);

  const { user } = useAuth();
  const uid = user?.uid;

  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilterValue = searchParams.get('filter') || DEFAULT_FILTER;

  useEffect(() => {
    let isMounted = true;
    setCardsLimit(CARDS_PER_PAGE);

    const loadFavoritesNannies = async (showLoader = true) => {
      const resetFavoritesState = () => {
        if (isMounted) {
          setFavorites([]);
          setLoading(false);
        }
      };

      if (!uid) {
        resetFavoritesState();
        return;
      }

      if (showLoader && isMounted) {
        setLoading(true);
      }

      try {
        const favoritesIds = getFavorites(uid);

        if (!favoritesIds.length) {
          resetFavoritesState();
          return;
        }
        const fetchNannies = await fetchNanniesByIds(favoritesIds);

        if (isMounted) {
          setFavorites(fetchNannies || []);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Unexpected error in loadFavoritesNannies:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadFavoritesNannies(true);

    const handleFavoritesUpdates = () => {
      loadFavoritesNannies(false);
    };

    window.addEventListener('favoritesUpdated', handleFavoritesUpdates);

    return () => {
      isMounted = false;
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdates);
    };
  }, [uid]);

  const { visibleNannies, hasMore } = useMemo(() => {
    const filtered = filterSwitch(activeFilterValue, favorites);
    return {
      visibleNannies: filtered.slice(0, cardsLimit),
      hasMore: cardsLimit < filtered.length,
    };
  }, [activeFilterValue, favorites, cardsLimit]);

  function handleSelectFilter(filteredValue) {
    if (filteredValue === DEFAULT_FILTER) {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', filteredValue);
    }

    setSearchParams(searchParams);
    setCardsLimit(CARDS_PER_PAGE);
  }

  function handleLoadMore() {
    setCardsLimit(prev => prev + CARDS_PER_PAGE);
  }

  return (
    <section>
      {favorites.length > 0 && (
        <NanniesFilter
          onSelectFilter={handleSelectFilter}
          activeFilterValue={activeFilterValue}
        />
      )}
      {loading ? (
        <Loader size={40} />
      ) : !favorites.length ? (
        <p>You haven't added any nannies to favorites yet.</p>
      ) : (
        <>
          <NanniesList nannies={visibleNannies} isOnline={isOnline} />
          {hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}
    </section>
  );
}

export default FavoritesPage;
