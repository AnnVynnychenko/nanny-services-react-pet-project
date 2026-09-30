import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';
import { media } from '../../../styles/breakPoints';

export const ModalWrapper = styled.div`
  position: relative;

  max-width: calc(100% - 36px);
  margin: auto;
  padding: ${clampBuilder(24, 64)};

  border-radius: ${clampBuilder(8, 30)};
  background-color: var(--light-color);

  ${media.tablet} {
    max-width: 566px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: ${clampBuilder(8, 20)};

  font-size: ${clampBuilder(16, 40)};
  font-weight: 500;
  line-height: 1.2;

  color: var(--dark-text-color);
`;

export const ModalExplanation = styled.p`
  margin-bottom: ${clampBuilder(16, 40)};

  font-size: ${clampBuilder(12, 16)};
  line-height: 1.25;
  letter-spacing: -0.03em;

  color: var(--grey-text-color-transp);
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: ${clampBuilder(16, 28)};
  right: ${clampBuilder(16, 28)};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${clampBuilder(16, 32)};
  height: ${clampBuilder(16, 32)};

  color: var(--dark-text-color);
  outline: none;

  &:hover,
  &:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }
`;

export const IconCloseModal = styled(Icon)`
  width: 100%;
  height: 100%;
`;
