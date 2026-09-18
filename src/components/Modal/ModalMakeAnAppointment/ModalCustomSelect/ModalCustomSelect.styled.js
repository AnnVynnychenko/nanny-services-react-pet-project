import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { clampBuilder } from '../../../../helpers/clampBuilder';

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconTime = styled(Icon)`
  position: absolute;
  right: ${clampBuilder(8, 18)};
  top: 50%;
  transform: translateY(-50%);
  width: ${clampBuilder(16, 20)};
  height: ${clampBuilder(16, 20)};
  pointer-events: none;
  color: var(--dark-text-color);
`;

export const customSelectStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
  }),
  control: provided => ({
    ...provided,
    boxSizing: 'border-box',
    padding: `${clampBuilder(4, 14)} ${clampBuilder(8, 18)} `,
    borderRadius: clampBuilder(8, 12),
    paddingRight: clampBuilder(12, 40),
    backgroundColor: 'transparent',
    boxShadow: 'none',
    outline: 'none',
    borderColor: 'var(--border-color)',
    '&:hover, &:focus': {
      borderColor: 'var(--accent-color)',
    },
    '&::placeholder': {
      fontSize: clampBuilder(8, 16),
      fontWeight: '400',
      lineHeight: '1.25',
      color: 'var(--dark-text-color)',
    },
  }),
  menu: provided => ({
    ...provided,
    width: '65.1%',
    right: 0,
    left: 'auto',
    borderRadius: clampBuilder(8, 12),
    backgroundColor: 'var(--white-color)',
    boxShadow: 'var(--modal-option-shadow)',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    paddingTop: '0',
    paddingBottom: clampBuilder(12, 16),
  }),
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
    fontSize: clampBuilder(8, 16),
    fontWeight: '400',
    color: 'var(--dark-text-color)',
    margin: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    marginBottom: '4px',
    paddingTop: '0',
    paddingBottom: '0',
    fontSize: clampBuilder(8, 16),
    fontWeight: '500',
    lineHeight: '1.25',
    backgroundColor: 'transparent',
    color: state.isFocused
      ? 'var(--dark-text-color)'
      : 'var(--modal-option-text-color)',
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
    fontSize: clampBuilder(8, 16),
    fontWeight: '500',
    color: 'var(--dark-text-color)',
    margin: 0,
  }),
  dropdownIndicator: () => ({ display: 'none' }),
  indicatorSeparator: () => ({ display: 'none' }),
};
