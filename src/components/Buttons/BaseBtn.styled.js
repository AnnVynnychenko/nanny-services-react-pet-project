import styled from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const BaseButtonStyles = styled.button`
  padding: ${({ $paddingX = 12, $paddingY = 8 }) =>
    `${clampBuilder(8, $paddingY)} ${clampBuilder(12, $paddingX)}`};

  font-weight: 500;
  font-size: ${clampBuilder(12, 16)};

  border: 1px solid var(--accent-color);
  border-radius: ${clampBuilder(12, 30)};

  background-color: var(--accent-color);
  color: var(--light-color);

  transition: var(--transition-thumb);
  outline: none;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--light-color);
    border-color: var(--light-color);
  }

  &:active {
    transform: scale(0.96);
  }
`;
