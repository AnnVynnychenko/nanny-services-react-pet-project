import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { get } from 'firebase/database';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { CARDS_PER_PAGE } from '../../data/pagination';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { parseSnapshot } from '../../helpers/filtersService';
import { buildFirebaseQuery } from '../../api/nanniesApi';

function NanniesPage() {
  const [nannies, setNannies] = useState([]);
  const [activeFilterValue, setActiveFilterValue] = useState('A to Z');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [cardsLimit, setCardsLimit] = useState(CARDS_PER_PAGE);

  useEffect(() => {
    const fetchNannies = async () => {
      if (cardsLimit === CARDS_PER_PAGE) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setError(null);

      try {
        const currentQuery = buildFirebaseQuery(
          activeFilterValue,
          cardsLimit + 1
        );
        const snapshot = await get(currentQuery);

        if (snapshot.exists()) {
          let parsedData = parseSnapshot(snapshot);

          const hasMoreItems = parsedData.length > cardsLimit;

          if (hasMoreItems) {
            parsedData = parsedData.slice(0, cardsLimit);
          }

          const filterReverse = ['Z to A', 'Popular'].includes(
            activeFilterValue
          );

          if (filterReverse) {
            parsedData.reverse();
          }

          setNannies(parsedData);
          setHasMore(hasMoreItems);
        } else {
          setNannies([]);
          setHasMore(false);
        }
      } catch (err) {
        console.error('Firebase query error:', err);
        setError('Failed to fetch data from the server.');
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchNannies();
  }, [activeFilterValue, cardsLimit]);

  function handleLoadMore() {
    setCardsLimit(prev => prev + CARDS_PER_PAGE);
  }

  function handleSelectFilter(filteredValue) {
    setActiveFilterValue(filteredValue);
    setCardsLimit(CARDS_PER_PAGE);
  }

  if (loading) return <p>Loading nannies list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <NanniesFilter
        onSelectFilter={handleSelectFilter}
        activeFilterValue={activeFilterValue}
      />
      <NanniesList nannies={nannies} isOnline={isOnline} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
      {hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={loadingMore} />
      )}
    </section>
  );
}

export default NanniesPage;
