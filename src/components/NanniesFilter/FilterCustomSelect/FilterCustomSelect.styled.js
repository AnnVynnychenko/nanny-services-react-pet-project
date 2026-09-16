import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const FilterSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 226px;
`;

export const customFilterSelectStyles = {
  control: provided => ({
    ...provided,
    minHeight: 'auto',
    padding: `${clampBuilder(4, 14)} ${clampBuilder(8, 18)}`,
    borderRadius: clampBuilder(8, 14),
    backgroundColor: 'var(--accent-color)',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: clampBuilder(8, 14),
    backgroundColor: 'var(--white-color)',
    boxShadow: 'var(--modal-option-shadow)',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    paddingTop: clampBuilder(12, 14),
    paddingBottom: clampBuilder(12, 18),
    paddingLeft: clampBuilder(12, 18),
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    marginBottom: clampBuilder(8, 12),
    paddingTop: '0',
    paddingBottom: '0',
    fontSize: clampBuilder(8, 18),
    fontWeight: '400',
    lineHeight: '1.1',
    backgroundColor: 'transparent',
    color: state.isFocused
      ? 'var(--dark-text-color)'
      : 'var(--select-option-text-color)',
    cursor: 'pointer',
    '&:last-child': {
      marginBottom: '0',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
  }),
  singleValue: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    fontSize: clampBuilder(8, 18),
    fontWeight: '500',
    lineHeight: '1.11',
    color: 'var(--light-color)',
  }),
  dropdownIndicator: () => ({ display: 'none' }),
  indicatorSeparator: () => ({ display: 'none' }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
    margin: '0',
  }),
  input: provided => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
  placeholder: provided => ({
    ...provided,

    margin: 0,
  }),
};

export const IconArrowDown = styled(Icon)`
  position: absolute;
  right: ${clampBuilder(8, 18)};
  top: 50%;
  transform: translateY(-50%);
  width: ${clampBuilder(8, 16)};
  height: ${clampBuilder(8, 16)};
  pointer-events: none;
  color: var(--white-color);
`;
