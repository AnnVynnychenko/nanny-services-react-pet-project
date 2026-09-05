import styled from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const NanniesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${clampBuilder(12, 32)};
`;
