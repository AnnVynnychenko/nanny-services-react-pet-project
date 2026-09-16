import FilterCustomSelect from './FilterCustomSelect';
import { FilterWrapper, Title } from './NanniesFilter.styled';

function NanniesFilter({ onSelectFilter }) {
  function handleFilterChange(filterValue) {
    if (onSelectFilter) {
      onSelectFilter(filterValue);
    }
  }

  return (
    <FilterWrapper>
      <Title>Filters</Title>
      <FilterCustomSelect onFilterChange={handleFilterChange} />
    </FilterWrapper>
  );
}

export default NanniesFilter;
