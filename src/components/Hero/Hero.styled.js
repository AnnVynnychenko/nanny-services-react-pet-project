import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';
import { SessionBtn } from '../Buttons';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const HeroContainer = styled.div`
  max-width: ${clampBuilder(134, 600)};
  padding-block: ${clampBuilder(36, 160)};
  padding-left: ${clampBuilder(20, 96)};

  h1 {
    margin-bottom: ${clampBuilder(8, 28)};
    font-size: ${clampBuilder(16, 70)};
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--light-color);
  }

  p {
    margin-bottom: ${clampBuilder(12, 64)};
    font-size: ${clampBuilder(12, 28)};
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--light-color);
  }
`;

export const GetStartedBtn = styled(SessionBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${clampBuilder(4, 18)};
  font-size: ${clampBuilder(8, 18)};

  transition:
    color var(--transition-thumb),
    background-color var(--transition-thumb);
`;

export const ArrowIconWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${clampBuilder(8, 24)};
  height: ${clampBuilder(8, 24)};
  flex-shrink: 0;
`;

export const ArrowIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: inherit;

  transition: opacity var(--transition-thumb);

  &.default-icon {
    opacity: 1;
  }

  &.hover-icon {
    opacity: 0;
  }

  ${GetStartedBtn}:hover &.default-icon,
  ${GetStartedBtn}:focus-visible &.default-icon {
    opacity: 0;
  }

  ${GetStartedBtn}:hover &.hover-icon,
  ${GetStartedBtn}:focus-visible &.hover-icon {
    opacity: 1;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: ${clampBuilder(12, 50)};
`;
