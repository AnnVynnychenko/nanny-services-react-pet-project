import styled, { css } from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';

const commonTextStyle = css`
  font-size: ${clampBuilder(10, 16)};
  font-weight: 500;
  line-height: 1.5;
`;

export const NannyExtraInfo = styled.span`
  display: flex;
  align-items: center;
  gap: ${clampBuilder(2, 4)};
  padding: 8px ${clampBuilder(8, 16)};
  border-radius: ${clampBuilder(8, 24)};
  background-color: var(--background-color);
`;

export const NannyExtraInfoTitle = styled.span`
  ${commonTextStyle};
  letter-spacing: -0.01em;
  color: var(--grey-text-color);
`;

export const NannyExtraInfoValue = styled.span`
  ${commonTextStyle};
  letter-spacing: -0.01em;
  color: var(--dark-text-color);
`;
