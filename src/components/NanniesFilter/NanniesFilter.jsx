import FilterCustomSelect from './FilterCustomSelect';
import { FilterWrapper, Title } from './NanniesFilter.styled';

function NanniesFilter({ onSelectFilter, activeFilterValue }) {
  function handleFilterChange(filterValue) {
    if (onSelectFilter) {
      onSelectFilter(filterValue);
    }
  }

  return (
    <FilterWrapper>
      <Title>Filters</Title>
      <FilterCustomSelect
        onFilterChange={handleFilterChange}
        activeFilterValue={activeFilterValue}
      />
    </FilterWrapper>
  );
}

export default NanniesFilter;
