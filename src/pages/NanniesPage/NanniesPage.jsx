import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { dbFirebase } from '../../firebase/config';
import NanniesList from '../../components/NanniesList';
import { isOnline } from '../../data/NannyIsOnline';
import NanniesFilter from '../../components/NanniesFilter';
import {
  filterGreaterThanNumber,
  filterLessThanOrEqualNumber,
  sortAtoZ,
  sortNotPopular,
  sortPopular,
  sortZtoA,
} from '../../helpers/filtersService';

function NanniesPage() {
  const [nannies, setNannies] = useState([]);
  const [activeFilterValue, setActiveFilterValue] = useState('A to Z');
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

  function handleSelectFilter(filteredValue) {
    setActiveFilterValue(filteredValue);
  }

  const visibleNannies = useMemo(() => {
    switch (activeFilterValue) {
      case 'A to Z':
        return sortAtoZ(nannies);
      case 'Z to A':
        return sortZtoA(nannies);
      case 'Less than 10$':
        return filterLessThanOrEqualNumber(nannies);
      case 'Greater than 10$':
        return filterGreaterThanNumber(nannies);
      case 'Popular':
        return sortPopular(nannies);
      case 'Not popular':
        return sortNotPopular(nannies);
      case 'Show all':
        return nannies;
      default:
        return nannies;
    }
  }, [nannies, activeFilterValue]);

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
    </section>
  );
}

export default NanniesPage;
