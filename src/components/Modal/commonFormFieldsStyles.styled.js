import { css } from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const commonFormFieldsStyles = css`
  width: 100%;
  padding: ${clampBuilder(4, 16)} ${clampBuilder(8, 18)};
  border: 1px solid var(--border-color);
  border-radius: ${clampBuilder(4, 12)};
  font-size: ${clampBuilder(8, 16)};
  font-weight: 500;
  line-height: 1.25;
  transition: var(--transition-thumb);

  &::placeholder {
    font-size: ${clampBuilder(8, 16)};
    font-weight: 400;
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
  font-weight: 400;
  line-height: 1.2;
  color: var(--error-color);
  pointer-events: none;
  white-space: nowrap;
`;

export const commonSubmitBtnStyles = css`
  width: 100%;
  margin-top: ${clampBuilder(8, 24)};
  border: 1px solid transparent;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--white-color);
    border-color: var(--accent-color);
  }
`;

export const commonFieldWrapperStyles = css`
  position: relative;
  width: 100%;
`;
