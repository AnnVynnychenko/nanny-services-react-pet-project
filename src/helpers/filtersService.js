const sortByStringKey = (arr = [], key = 'name', isAscending = true) => {
  return [...arr].sort((a, b) => {
    const valA = String(a[key] ?? '');
    const valB = String(b[key] ?? '');

    const comparison = valA.localeCompare(valB, 'en', { sensitivity: 'base' });

    return isAscending ? comparison : -comparison;
  });
};

const getNumericValue = (item, key) => {
  const value = item?.[key];
  if (value === null || value === undefined) return NaN;

  return typeof value === 'number' ? value : parseFloat(value);
};

const filterByNumber = (
  arr = [],
  key = 'price_per_hour',
  limit = 10,
  mode = 'lessOrEqual'
) => {
  const targetNumber = Number(limit);

  return arr.filter(item => {
    const parsedPrice = getNumericValue(item, key);
    if (Number.isNaN(parsedPrice)) return false;

    return mode === 'lessOrEqual'
      ? parsedPrice <= targetNumber
      : parsedPrice > targetNumber;
  });
};

const sortByNumericKey = (arr = [], key = 'rating', isAscending = true) => {
  return [...arr].sort((a, b) => {
    const valA = getNumericValue(a, key);
    const valB = getNumericValue(b, key);

    const validA = Number.isNaN(valA) ? 0 : valA;
    const validB = Number.isNaN(valB) ? 0 : valB;

    return isAscending ? validA - validB : validB - validA;
  });
};

export const sortAtoZ = (arr, key) => sortByStringKey(arr, key, true);
export const sortZtoA = (arr, key) => sortByStringKey(arr, key, false);

export const sortPopular = (arr, key) => sortByNumericKey(arr, key, false);
export const sortNotPopular = (arr, key) => sortByNumericKey(arr, key, true);

export const filterLessThanOrEqualNumber = (arr, key, number) =>
  filterByNumber(arr, key, number, 'lessOrEqual');
export const filterGreaterThanNumber = (arr, key, number) =>
  filterByNumber(arr, key, number, 'greater');
