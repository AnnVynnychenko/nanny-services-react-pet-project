import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const EyeIcon = styled(Icon)`
  width: ${clampBuilder(12, 20)};
  height: ${clampBuilder(12, 20)};
  color: inherit;
`;

export const EyeBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${clampBuilder(8, 18)};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${clampBuilder(12, 20)};
  height: ${clampBuilder(12, 20)};
  color: var(--dark-text-color);

  &:hover {
    color: var(--accent-color);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;
