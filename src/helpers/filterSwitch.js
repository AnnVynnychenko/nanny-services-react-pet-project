import {
  filterGreaterThanNumber,
  filterLessThanOrEqualNumber,
  sortAtoZ,
  sortNotPopular,
  sortPopular,
  sortZtoA,
} from './filtersService';

export const filterSwitch = (activeFilterValue, nannies) => {
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
};
