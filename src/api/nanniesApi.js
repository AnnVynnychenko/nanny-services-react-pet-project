import {
  get,
  endAt,
  limitToFirst,
  limitToLast,
  orderByChild,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { dbFirebase } from '../firebase/config';
import {
  FILTER_OPTIONS,
  FIREBASE_INDEX_ON,
  GREATER_THAN_PRICE,
  PRICE_THRESHOLD,
} from '../data/filterDefaultParam';

const nanniesRef = ref(dbFirebase, 'nannies');

const {
  A_TO_Z,
  Z_TO_A,
  LESS_THAN_THRESHOLD,
  GREATER_THAN_THRESHOLD,
  POPULAR,
  NOT_POPULAR,
  SHOW_ALL,
} = FILTER_OPTIONS;

const { NAME, PRICE_PER_HOUR, RATING } = FIREBASE_INDEX_ON;

export const buildFirebaseQuery = (filter, limit) => {
  const getFilterRules = () => {
    switch (filter) {
      case A_TO_Z:
        return [orderByChild(NAME), limitToFirst(limit)];
      case Z_TO_A:
        return [orderByChild(NAME), limitToLast(limit)];
      case LESS_THAN_THRESHOLD:
        return [
          orderByChild(PRICE_PER_HOUR),
          endAt(PRICE_THRESHOLD),
          limitToFirst(limit),
        ];
      case GREATER_THAN_THRESHOLD:
        return [
          orderByChild(PRICE_PER_HOUR),
          startAt(GREATER_THAN_PRICE),
          limitToFirst(limit),
        ];
      case POPULAR:
        return [orderByChild(RATING), limitToLast(limit)];
      case NOT_POPULAR:
        return [orderByChild(RATING), limitToFirst(limit)];
      case SHOW_ALL:
        return [orderByKey(), limitToFirst(limit)];
      default:
        return [limitToFirst(limit)];
    }
  };
  return query(nanniesRef, ...getFilterRules());
};

export const parseSnapshot = (snapshot, filter) => {
  const nannies = [];
  snapshot.forEach(childSnapshot => {
    nannies.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });

  const isReversedFilter = [Z_TO_A, POPULAR].includes(filter);
  if (isReversedFilter) {
    nannies.reverse();
  }

  return nannies;
};

export const fetchNanniesByIds = async idsArray => {
  if (!idsArray || !idsArray.length) return [];

  try {
    const promises = idsArray.map(async id => {
      const nannyRef = ref(dbFirebase, `nannies/${id}`);
      const snapshot = await get(nannyRef);
      if (snapshot.exists()) {
        return {
          ...snapshot.val(),
          id: snapshot.key,
        };
      }
      return null;
    });

    const results = await Promise.all(promises);
    return results.filter(Boolean);
  } catch (err) {
    console.error('Failed to fetch favorite nannies:', err);
    return [];
  }
};
