import { Link, Outlet } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { dbFirebase } from '../../firebase/config';
import { useEffect, useState } from 'react';
import NanniesList from '../../components/NanniesList';

function NanniesPage() {
  const [nannies, setNannies] = useState([]);
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

  if (loading) return <p>Loading nannies list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <NanniesList nannies={nannies} />
      <Link to="details">
        <button type="button"></button>
      </Link>
      <Outlet />
    </>
  );
}

export default NanniesPage;
