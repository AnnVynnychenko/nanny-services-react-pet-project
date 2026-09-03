import styled from 'styled-components';
import { clampBuilder } from '../helpers/clampBuilder';
import { breakpoints } from './breakPoints';

export const Container = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop};
  margin: 0 auto;

  padding-left: ${clampBuilder(16, 32)};
  padding-right: ${clampBuilder(16, 32)};
`;
