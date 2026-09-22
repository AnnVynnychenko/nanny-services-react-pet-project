export const parseSnapshot = snapshot => {
  const nannies = [];
  snapshot.forEach(childSnapshot => {
    nannies.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return nannies;
};

export const sortAtoZ = (arr = [], key = 'name') => {
  return arr.sort((a, b) => {
    const valA = a[key] ?? '';
    const valB = b[key] ?? '';
    return valA.localeCompare(valB);
  });
};

export const sortZtoA = (arr = [], key = 'name') => {
  return arr.sort((a, b) => {
    const valA = a[key] ?? '';
    const valB = b[key] ?? '';
    return valB.localeCompare(valA);
  });
};

export const filterLessThanOrEqualNumber = (
  arr = [],
  key = 'price_per_hour',
  number = 10
) => {
  const targetNumber = Number(number);
  return arr.filter(item => {
    const price = item[key] ?? 0;

    if (price === null || price === undefined) return false;

    const parsedPrice = typeof price === 'number' ? price : parseFloat(price);

    if (Number.isNaN(parsedPrice)) return false;

    return parsedPrice <= targetNumber;
  });
};

export const filterGreaterThanNumber = (
  arr = [],
  key = 'price_per_hour',
  number = 10
) => {
  const targetNumber = Number(number);
  return arr.filter(item => {
    const price = item[key] ?? 0;

    if (price === null || price === undefined) return false;

    const parsedPrice = typeof price === 'number' ? price : parseFloat(price);

    if (Number.isNaN(parsedPrice)) return false;

    return parsedPrice > targetNumber;
  });
};

export const sortPopular = (arr = [], key = 'rating') => {
  return arr.sort((a, b) => {
    const valA = parseFloat(a[key]);
    const valB = parseFloat(b[key]);

    const validA = Number.isNaN(valA) ? 0 : valA;
    const validB = Number.isNaN(valB) ? 0 : valB;

    return validB - validA;
  });
};

export const sortNotPopular = (arr = [], key = 'rating') => {
  return arr.sort((a, b) => {
    const valA = parseFloat(a[key]);
    const valB = parseFloat(b[key]);

    const validA = Number.isNaN(valA) ? 0 : valA;
    const validB = Number.isNaN(valB) ? 0 : valB;

    return validA - validB;
  });
};
