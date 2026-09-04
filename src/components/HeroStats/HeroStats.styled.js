import { Icon } from '@iconify/react';
import styled, { css } from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.div`
  ${flexCenter}
  gap: 16px;
  max-width: ${clampBuilder(63, 284)};
  padding: ${clampBuilder(8, 32)};
  background-color: var(--light-color);
  border-radius: 20px;
`;

export const CheckContainer = styled.div`
  ${flexCenter}
  padding: ${clampBuilder(4, 12)};
  background-color: var(--accent-color);
  border-radius: 13px;
`;

export const CheckIcon = styled(Icon)`
  width: ${clampBuilder(8, 30)};
  height: ${clampBuilder(8, 30)};
  color: var(--light-color);
`;

export const StatText = styled.div`
  font-size: ${clampBuilder(8, 16)};
  font-weight: 400;
  letter-spacing: -0.03em;
  color: var(--grey-text-color);
`;

export const StatCount = styled.div`
  font-size: ${clampBuilder(12, 24)};
  font-weight: 700;
  color: var(--dark-text-color);
`;
