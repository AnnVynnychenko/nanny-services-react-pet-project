import {
  endAt,
  limitToFirst,
  limitToLast,
  orderByChild,
  orderByKey,
  query,
  ref,
  startAfter,
} from 'firebase/database';
import { dbFirebase } from '../firebase/config';

const nanniesRef = ref(dbFirebase, 'nannies');

export const buildFirebaseQuery = (filter, limit) => {
  switch (filter) {
    case 'A to Z':
      return query(nanniesRef, orderByChild('name'), limitToFirst(limit));
    case 'Z to A':
      return query(nanniesRef, orderByChild('name'), limitToLast(limit));
    case 'Less than 10$':
      return query(
        nanniesRef,
        orderByChild('price_per_hour'),
        endAt(10),
        limitToFirst(limit)
      );
    case 'Greater than 10$':
      return query(
        nanniesRef,
        orderByChild('price_per_hour'),
        startAfter(10),
        limitToFirst(limit)
      );
    case 'Popular':
      return query(nanniesRef, orderByChild('rating'), limitToLast(limit));
    case 'Not popular':
      return query(nanniesRef, orderByChild('rating'), limitToFirst(limit));
    case 'Show all':
      return query(nanniesRef, orderByKey(), limitToFirst(limit));
    default:
      return query(nanniesRef, limitToFirst(limit));
  }
};
