import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const ModalWrapper = styled.div`
  position: relative;
  max-width: ${clampBuilder(128, 566)};
  margin: auto;
  padding: ${clampBuilder(16, 64)};
  border-radius: ${clampBuilder(8, 30)};
  background-color: var(--light-color);
`;

export const ModalTitle = styled.h2`
  margin-bottom: ${clampBuilder(8, 20)};
  font-size: ${clampBuilder(12, 40)};
  font-weight: 500;
  line-height: 1.2;
  color: var(--dark-text-color);
`;

export const ModalExplanation = styled.p`
  margin-bottom: ${clampBuilder(12, 40)};
  font-size: ${clampBuilder(8, 16)};
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--grey-text-color-transp);
`;

export const ModalCloseBtn = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: ${clampBuilder(8, 32)};
  height: ${clampBuilder(8, 32)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-text-color);
  outline: none;
`;
