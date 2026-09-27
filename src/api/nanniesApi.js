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
import { FILTER_OPTIONS, FIREBASE_INDEX_ON } from '../data/filterDefaultParam';

const nanniesRef = ref(dbFirebase, 'nannies');

const {
  A_TO_Z,
  Z_TO_A,
  LESS_THAN_10,
  GREATER_THAN_10,
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
      case LESS_THAN_10:
        return [orderByChild(PRICE_PER_HOUR), endAt(10), limitToFirst(limit)];
      case GREATER_THAN_10:
        return [
          orderByChild(PRICE_PER_HOUR),
          startAfter(10),
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
