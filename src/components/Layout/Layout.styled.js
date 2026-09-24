import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../helpers/clampBuilder';
import heroImg from '../../assets/images/homeBgImg.jpg';
import { breakpoints } from '../../styles/breakPoints';
import { media } from '../../styles/breakPoints';
import { CommonBtn, SessionBtn } from '../Buttons';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

const flexResponsive = gapValue => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gapValue};
  flex-direction: column;
`;

export const HeroWrapper = styled.div`
  ${({ $isHome }) =>
    $isHome &&
    css`
      max-width: ${breakpoints.desktopHome};
      margin: 0 auto;
      width: calc(100% - 8px);
      border-radius: ${clampBuilder(20, 30)};
      overflow: hidden;

      background-color: var(--accent-color);

      ${media.tablet} {
        background-color: var(--accent-color);
        background-image: url(${heroImg});
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 50% 100%;
      }

      ${media.desktop} {
        background-size: 699px 100%;
      }
    `}
`;

export const Header = styled.header`
  ${flexCenter};
  justify-content: space-between;
  gap: ${clampBuilder(8, 16)};

  max-width: ${({ $isHome }) =>
    $isHome ? breakpoints.desktopHome : breakpoints.desktop};

  margin-left: auto;
  margin-right: auto;

  padding: ${clampBuilder(10, 20)} ${clampBuilder(12, 96)};

  ${({ $isHome }) =>
    $isHome &&
    css`
      border-radius: ${clampBuilder(20, 30)} ${clampBuilder(20, 30)} 0 0;
      border-bottom: 1px solid var(--light-color);
      overflow: hidden;
    `};

  background-color: ${({ $isHome }) =>
    $isHome ? 'transparent' : 'var(--accent-color)'};

  .logo {
    color: var(--light-color);
    font-weight: 500;
    font-size: ${clampBuilder(14, 24)};
    white-space: nowrap;
  }
`;

export const RightContainer = styled.div`
  ${flexCenter};
  gap: ${({ $isHome, $isLoggedIn }) => {
    if ($isHome) {
      return $isLoggedIn ? clampBuilder(28, 64) : clampBuilder(20, 92);
    }
    return clampBuilder(28, 217);
  }};
`;

export const HeaderNav = styled.ul`
  ${flexResponsive(clampBuilder(10, 40))}

  ${media.tablet} {
    flex-direction: row;
  }

  li {
    display: flex;
    align-items: center;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    color: var(--light-color);
    font-weight: 400;
    font-size: ${clampBuilder(12, 16)};
    transition: var(--transition-thumb);
    outline: none;

    &:hover,
    &:focus-visible {
      color: var(--white-color);
      text-shadow: var(--text-shadow-hover);
    }

    &.active {
      color: var(--light-color);
      text-shadow: none;
      ${({ $isHome }) =>
        !$isHome &&
        css`
          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%) translateY(100%);
            width: 0.5em;
            height: 0.5em;
            border-radius: 50%;
            background-color: var(--white-color);
          }
        `};
    }
  }
`;

export const AuthBlock = styled.div`
  ${flexResponsive('8px')}

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const RegistrationBtn = styled(CommonBtn)`
  ${({ $isHome }) =>
    $isHome
      ? css`
          background-color: var(--light-color);
          color: var(--accent-color);
          border: 1px solid var(--accent-color);

          ${media.tablet} {
            background-color: var(--accent-color);
            color: var(--light-color);
          }
        `
      : css`
          background-color: var(--light-color);
          color: var(--accent-color);
          border: 1px solid var(--light-color);

          &:hover,
          &:focus-visible {
            color: var(--accent-color);
            background-color: var(--hover-accent-light);
          }
        `}
`;

export const AuthBtn = styled(SessionBtn)`
  ${({ $isHome }) =>
    $isHome === false &&
    css`
      &:hover,
      &:focus-visible {
        color: var(--accent-color);
        background-color: var(--light-color);
        border: 1px solid transparent;
      }
    `}
`;

export const UserBlock = styled.div`
  ${flexResponsive(clampBuilder(8, 24))}

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const UserName = styled.span`
  ${flexCenter};
  gap: ${clampBuilder(8, 14)};

  color: var(--light-color);
  font-weight: 500;
  font-size: ${clampBuilder(12, 18)};
`;

export const UserIcon = styled(Icon)`
  width: ${clampBuilder(12, 24)};
  height: ${clampBuilder(12, 24)};

  color: var(--accent-color);
`;

export const UserIconContainer = styled.div`
  ${flexCenter};
  justify-content: center;

  width: ${clampBuilder(24, 40)};
  height: ${clampBuilder(24, 40)};

  background-color: var(--light-color);
  border-radius: 10px;
`;
