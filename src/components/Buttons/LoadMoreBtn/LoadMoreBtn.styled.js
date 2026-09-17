import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';
import { CommonBtn } from '../Buttons';

export const LoadMoreButton = styled(CommonBtn)`
  margin-top: ${clampBuilder(16, 64)};
  margin-left: auto;
  margin-right: auto;
  border: 1px solid transparent;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--white-color);
    border-color: var(--accent-color);
  }
`;
