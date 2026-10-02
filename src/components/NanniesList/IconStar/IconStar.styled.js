import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const IconStar = styled(Icon).attrs({
  icon: 'ant-design:star-filled',
})`
  width: ${clampBuilder(10, 16)};
  height: ${clampBuilder(10, 16)};

  color: var(--gold-color);
`;
