import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { get } from 'firebase/database';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/nannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { CARDS_PER_PAGE } from '../../data/pagination';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { parseSnapshot, buildFirebaseQuery } from '../../api/nanniesApi';
import { DEFAULT_FILTER } from '../../data/filterDefaultParam';
import Loader from '../../components/Loader';

function NanniesPage() {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [cardsLimit, setCardsLimit] = useState(CARDS_PER_PAGE);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilterValue = searchParams.get('filter') || DEFAULT_FILTER;

  useEffect(() => {
    let isSubscribed = true;

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

        if (!isSubscribed) return;

        if (snapshot.exists()) {
          let parsedData = parseSnapshot(snapshot, activeFilterValue);
          const hasMoreItems = parsedData.length > cardsLimit;

          if (hasMoreItems) {
            parsedData = parsedData.slice(0, cardsLimit);
          }

          setNannies(parsedData);
          setHasMore(hasMoreItems);
        } else {
          setNannies([]);
          setHasMore(false);
        }
      } catch (err) {
        if (isSubscribed) {
          setError('Failed to fetch data from the server.');
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
          setLoadingMore(false);
        }
      }
    };

    fetchNannies();

    return () => {
      isSubscribed = false;
    };
  }, [activeFilterValue, cardsLimit]);

  function handleLoadMore() {
    if (loadingMore) return;
    setCardsLimit(prev => prev + CARDS_PER_PAGE);
  }

  function handleSelectFilter(filteredValue) {
    if (filteredValue === DEFAULT_FILTER) {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', filteredValue);
    }

    setSearchParams(searchParams);
    setCardsLimit(CARDS_PER_PAGE);
  }

  if (error) return <p>{error}</p>;

  return (
    <section>
      <NanniesFilter
        onSelectFilter={handleSelectFilter}
        activeFilterValue={activeFilterValue}
      />
      {loading ? (
        <Loader size={40} />
      ) : (
        <NanniesList nannies={nannies} isOnline={isOnline} />
      )}
      {hasMore && nannies.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={loadingMore} />
      )}
    </section>
  );
}

export default NanniesPage;
