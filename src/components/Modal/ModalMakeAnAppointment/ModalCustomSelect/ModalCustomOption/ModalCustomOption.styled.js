import styled from 'styled-components';
import { clampBuilder } from '../../../../../helpers/clampBuilder';

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${clampBuilder(8, 12)};
  width: 100%;
  padding: 2px 0;
`;

export const NumberWrapper = styled.span`
  display: inline-block;
  text-align: center;
  font-variant-numeric: tabular-nums;
  min-width: 2ch;
`;

export const ColonPart = styled.span`
  display: inline-block;
  text-align: center;
  user-select: none;
`;
