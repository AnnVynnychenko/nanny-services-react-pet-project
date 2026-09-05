import styled from 'styled-components';
import { breakpoints } from './breakPoints';
import { clampBuilder } from '../helpers/clampBuilder';

export const Container = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop};
  margin: 0 auto;

  padding-inline: ${clampBuilder(28, 128)};
  padding-top: ${clampBuilder(12, 64)};

  background-color: var(--background-color);
`;
