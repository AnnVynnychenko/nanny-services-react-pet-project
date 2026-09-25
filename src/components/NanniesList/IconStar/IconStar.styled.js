import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const IconStarRating = styled(Icon)`
  width: ${clampBuilder(10, 16)};
  height: ${clampBuilder(10, 16)};
  color: var(--gold-color);
`;
