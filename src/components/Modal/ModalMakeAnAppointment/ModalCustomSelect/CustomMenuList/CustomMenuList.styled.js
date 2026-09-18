import styled from 'styled-components';
import { clampBuilder } from '../../../../../helpers/clampBuilder';

export const SelectHeader = styled.p`
  text-align: center;
  margin-bottom: ${clampBuilder(8, 16)};
  padding-top: ${clampBuilder(8, 16)};
  padding-left: ${clampBuilder(4, 8)};
  padding-right: ${clampBuilder(4, 8)};
  font-size: ${clampBuilder(8, 16)};
  font-weight: 500;
  line-height: 1.5;
  color: var(--dark-text-color);
`;
