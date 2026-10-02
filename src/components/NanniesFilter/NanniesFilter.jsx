import FilterCustomSelect from './FilterCustomSelect';
import { FilterWrapper, Title } from './NanniesFilter.styled';

function NanniesFilter({ onSelectFilter, activeFilterValue }) {
  return (
    <FilterWrapper>
      <Title>Filters</Title>
      <FilterCustomSelect
        onFilterChange={onSelectFilter}
        activeFilterValue={activeFilterValue}
      />
    </FilterWrapper>
  );
}

export default NanniesFilter;
