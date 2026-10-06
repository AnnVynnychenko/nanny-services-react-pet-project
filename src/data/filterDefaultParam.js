export const DEFAULT_FILTER = 'A to Z';

export const FILTER_OPTIONS = {
  A_TO_Z: 'A to Z',
  Z_TO_A: 'Z to A',
  LESS_THAN_THRESHOLD: 'Less than 10$',
  GREATER_THAN_THRESHOLD: 'Greater than 10$',
  POPULAR: 'Popular',
  NOT_POPULAR: 'Not popular',
  SHOW_ALL: 'Show all',
};

export const FIREBASE_INDEX_ON = {
  NAME: 'name',
  PRICE_PER_HOUR: 'price_per_hour',
  RATING: 'rating',
};

export const FILTER_OPTIONS_SELECT = Object.values(FILTER_OPTIONS).map(
  option => ({ value: option, label: option })
);

export const PRICE_THRESHOLD = 10;
export const PRICE_THRESHOLD_STEP = 0.01;
export const GREATER_THAN_PRICE = PRICE_THRESHOLD + PRICE_THRESHOLD_STEP;
