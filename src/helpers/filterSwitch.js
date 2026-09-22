import {
  filterGreaterThanNumber,
  filterLessThanOrEqualNumber,
  sortAtoZ,
  sortNotPopular,
  sortPopular,
  sortZtoA,
} from './filtersService';

export const filterSwitch = (activeFilterValue, nannies) => {
  const nanniesData = [...nannies];
  switch (activeFilterValue) {
    case 'A to Z':
      return sortAtoZ(nanniesData);
    case 'Z to A':
      return sortZtoA(nanniesData);
    case 'Less than 10$':
      return filterLessThanOrEqualNumber(nanniesData);
    case 'Greater than 10$':
      return filterGreaterThanNumber(nanniesData);
    case 'Popular':
      return sortPopular(nanniesData);
    case 'Not popular':
      return sortNotPopular(nanniesData);
    case 'Show all':
      return nanniesData;
    default:
      return nanniesData;
  }
};
