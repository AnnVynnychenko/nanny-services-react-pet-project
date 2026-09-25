import styled from 'styled-components';
import { breakpoints } from './breakPoints';
import { clampBuilder } from '../helpers/clampBuilder';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 89px);
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  padding: ${clampBuilder(12, 64)} ${clampBuilder(16, 128)};
  background-color: var(--background-color);
`;
