import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { dbFirebase } from '../../firebase/config';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import { filterSwitch } from '../../helpers/filterSwitch';
import { CARDS_PER_PAGE } from '../../data/pagination';
import LoadMoreBtn from '../../components/Buttons/LoadMoreBtn/LoadMoreBtn';

function NanniesPage() {
  const [nannies, setNannies] = useState([]);
  const [activeFilterValue, setActiveFilterValue] = useState('A to Z');
  const [cardsLimit, setCardsLimit] = useState(CARDS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const nanniesRef = ref(dbFirebase, 'nannies');

    const unsubscribe = onValue(
      nanniesRef,
      snapshot => {
        try {
          const data = snapshot.val();

          if (data) {
            const parsedData = Array.isArray(data)
              ? data
              : Object.keys(data).map(key => ({
                  id: key,
                  ...data[key],
                }));

            setNannies(parsedData);
          } else {
            setNannies([]);
          }
        } catch (parseError) {
          console.error('Data transformation error:', parseError);
          setError('Failed to process incoming nannies data.');
        } finally {
          setLoading(false);
        }
      },
      firebaseError => {
        console.error('Firebase Realtime Database error:', firebaseError);
        setError(
          'Failed to fetch data from the server. Please try again later.'
        );
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const { visibleNannies, hasMore } = useMemo(() => {
    const filtered = filterSwitch(activeFilterValue, nannies);
    return {
      visibleNannies: filtered.slice(0, cardsLimit),
      hasMore: cardsLimit < filtered.length,
    };
  }, [activeFilterValue, nannies, cardsLimit]);

  function handleSelectFilter(filteredValue) {
    setActiveFilterValue(filteredValue);
    setCardsLimit(CARDS_PER_PAGE);
  }

  function handleLoadMore() {
    setCardsLimit(prev => prev + CARDS_PER_PAGE);
  }

  if (loading) return <p>Loading nannies list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <NanniesFilter onSelectFilter={handleSelectFilter} />
      <NanniesList nannies={visibleNannies} isOnline={isOnline} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
      {hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
    </section>
  );
}

export default NanniesPage;
