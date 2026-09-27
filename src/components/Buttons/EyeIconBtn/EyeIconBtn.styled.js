import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const EyeBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${clampBuilder(2, 6)};
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${clampBuilder(24, 44)};
  height: ${clampBuilder(24, 44)};

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

export const EyeIcon = styled(Icon)`
  width: ${clampBuilder(12, 20)};
  height: ${clampBuilder(12, 20)};

  color: inherit;
`;
