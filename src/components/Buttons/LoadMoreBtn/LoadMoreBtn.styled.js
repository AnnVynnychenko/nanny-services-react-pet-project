import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';
import { BaseButtonStyles } from '../BaseBtn.styled';

export const LoadMoreButton = styled(BaseButtonStyles)`
  margin-top: ${clampBuilder(16, 64)};
  margin-left: auto;
  margin-right: auto;
  line-height: 1.25;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--light-color);
    border-color: var(--accent-color);
  }
`;
