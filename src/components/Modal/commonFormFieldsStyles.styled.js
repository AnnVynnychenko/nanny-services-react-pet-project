import { css } from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const commonFormFieldsStyles = css`
  width: 100%;
  padding: ${clampBuilder(8, 16)} ${clampBuilder(12, 18)};
  border: 1px solid var(--border-color);
  border-radius: ${clampBuilder(8, 12)};
  font-size: ${clampBuilder(12, 16)};
  font-weight: 500;
  line-height: 1.25;
  transition: var(--transition-thumb);

  ${({ $hasRightIcon }) =>
    $hasRightIcon && `padding-right: ${clampBuilder(24, 44)};`}

  &::placeholder {
    font-size: ${clampBuilder(12, 16)};
    line-height: 1.25;
    color: var(--dark-text-color);
  }

  &:hover,
  &:focus {
    border-color: var(--accent-color);
  }
`;

export const commonErrorMessageStyles = css`
  position: absolute;
  left: ${clampBuilder(8, 12)};
  top: 2px;
  font-size: ${clampBuilder(8, 10)};
  line-height: 1.2;
  color: var(--error-color);
  pointer-events: none;
  white-space: nowrap;
`;

export const commonSubmitBtnStyles = css`
  width: 100%;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--light-color);
    border-color: var(--accent-color);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
`;

export const commonFieldWrapperStyles = css`
  position: relative;
  width: 100%;
`;
