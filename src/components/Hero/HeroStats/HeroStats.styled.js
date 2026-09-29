import { Icon } from '@iconify/react';
import styled, { css } from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';
import { media } from '../../../styles/breakPoints';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.div`
  ${flexCenter}
  gap: ${clampBuilder(8, 16)};
  padding: ${clampBuilder(10, 32)};
  background-color: var(--light-color);
  border-radius: ${clampBuilder(12, 20)};
  line-height: 1.25;

  ${media.desktop} {
    max-width: 284px;
  }
`;

export const CheckContainer = styled.div`
  ${flexCenter}
  flex-shrink: 0;
  padding: ${clampBuilder(4, 12)};
  background-color: var(--accent-color);
  border-radius: ${clampBuilder(4, 13)};
`;

export const CheckIcon = styled(Icon)`
  width: ${clampBuilder(16, 30)};
  height: ${clampBuilder(16, 30)};
  color: var(--light-color);
`;

export const StatText = styled.p`
  font-size: ${clampBuilder(12, 16)};
  letter-spacing: -0.02em;
  color: var(--grey-text-color);
`;

export const StatCount = styled.p`
  font-size: ${clampBuilder(14, 24)};
  font-weight: 700;
  color: var(--dark-text-color);
`;
