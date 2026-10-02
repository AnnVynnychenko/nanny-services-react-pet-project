import Select from 'react-select';
import {
  customFilterSelectStyles,
  FilterSelectWrapper,
  IconArrowDown,
} from './FilterCustomSelect.styled';
import {
  DEFAULT_FILTER,
  FILTER_OPTIONS_SELECT,
} from '../../../data/filterDefaultParam';

function FilterCustomSelect({
  onFilterChange,
  activeFilterValue = DEFAULT_FILTER,
}) {
  const selectedOption =
    FILTER_OPTIONS_SELECT.find(option => option.value === activeFilterValue) ||
    FILTER_OPTIONS_SELECT[0];

  function handleChange(option) {
    if (onFilterChange) {
      onFilterChange(option ? option.value : '');
    }
  }

  return (
    <FilterSelectWrapper>
      <Select
        options={FILTER_OPTIONS_SELECT}
        styles={customFilterSelectStyles}
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
      />
      <IconArrowDown icon="ep:arrow-down-bold" />
    </FilterSelectWrapper>
  );
}

export default FilterCustomSelect;
