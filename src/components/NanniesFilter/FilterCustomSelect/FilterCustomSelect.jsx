import Select from 'react-select';
import {
  customFilterSelectStyles,
  FilterSelectWrapper,
  IconArrowDown,
} from './FilterCustomSelect.styled';
import { useState } from 'react';

const options = [
  { value: 'A to Z', label: 'A to Z' },
  { value: 'Z to A', label: 'Z to A' },
  { value: 'Less than 10$', label: 'Less than 10$' },
  { value: 'Greater than 10$', label: 'Greater than 10$' },
  { value: 'Popular', label: 'Popular' },
  { value: 'Not popular', label: 'Not popular' },
  { value: 'Show all', label: 'Show all' },
];

function FilterCustomSelect({ onFilterChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleChange(option) {
    setSelectedOption(option);

    if (onFilterChange) {
      onFilterChange(option ? option.value : '');
    }
  }

  return (
    <FilterSelectWrapper>
      <Select
        options={options}
        styles={customFilterSelectStyles}
        menuPortalTarget={
          typeof document !== 'undefined' ? document.body : null
        }
        isSearchable={false}
        value={selectedOption}
        onChange={handleChange}
      />
      <IconArrowDown icon="ep:arrow-down-bold" />
    </FilterSelectWrapper>
  );
}

export default FilterCustomSelect;
