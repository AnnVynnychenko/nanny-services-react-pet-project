import styled from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${clampBuilder(12, 32)};
`;

export const Title = styled.span`
  font-size: ${clampBuilder(12, 14)};
  font-weight: 500;
  line-height: 1.2;
  color: var(--grey-text-color);
`;
