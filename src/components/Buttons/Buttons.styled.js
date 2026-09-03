import styled from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

export const SessionButton = styled.button`
  padding: ${clampBuilder(8, 12)} ${clampBuilder(12, 38)};

  border: 1px solid var(--white-color);
  border-radius: 30px;

  color: var(--white-color);
  font-weight: 500;
  font-size: ${clampBuilder(12, 16)};
`;

export const CommonButton = styled.button`
  padding: ${({ $paddingX = 40 }) =>
    `${clampBuilder(8, 12)} ${clampBuilder(12, $paddingX)}`};

  border-radius: 30px;
  background-color: var(--accent-color);

  color: var(--white-color);
  font-weight: 500;
  font-size: ${clampBuilder(12, 16)};
`;
