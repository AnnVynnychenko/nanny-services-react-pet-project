import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../helpers/clampBuilder';
import heroImg from '../../assets/images/homeBgImg.jpg';
import { breakpoints } from '../../styles/breakPoints';
import { media } from '../../styles/breakPoints';
import { BaseButtonStyles } from '../Buttons/BaseBtn.styled';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

const commonBtnStyles = css`
  flex-shrink: 0;

  line-height: 1.25;

  border: 1px solid var(--light-transp-color);
  background-color: transparent;
`;

const commonLinkStyles = css`
  outline: none;

  &:hover,
  &:focus-visible {
    color: var(--white-color);
    text-shadow: var(--text-shadow-hover);
  }
`;

const flexResponsive = gapValue => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gapValue};
`;

export const HeroWrapper = styled.div`
  ${({ $isHome }) =>
    $isHome &&
    css`
      max-width: ${breakpoints.desktopHome};
      width: calc(100% - 8px);
      margin: 0 auto;

      border-radius: ${clampBuilder(20, 30)};
      background-color: var(--accent-color);

      overflow: hidden;

      ${media.tablet} {
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

  gap: ${({ $isHome, $isLoggedIn }) => {
    if ($isHome) {
      return $isLoggedIn ? clampBuilder(28, 400) : clampBuilder(20, 458);
    }
    return clampBuilder(28, 305);
  }};

  max-width: ${({ $isHome }) =>
    $isHome ? breakpoints.desktopHome : breakpoints.desktop};

  margin-left: auto;
  margin-right: auto;

  padding: ${clampBuilder(10, 20)} ${clampBuilder(12, 96)};

  ${({ $isHome }) =>
    $isHome &&
    css`
      border-radius: ${clampBuilder(20, 30)} ${clampBuilder(20, 30)} 0 0;
      border-bottom: 1px solid var(--light-transp-color);

      overflow: hidden;
    `};

  background-color: ${({ $isHome }) =>
    $isHome ? 'transparent' : 'var(--accent-color)'};

  .logo {
    ${commonLinkStyles}
    font-weight: 500;
    font-size: ${clampBuilder(14, 24)};

    color: var(--light-color);
    white-space: nowrap;
  }
`;

export const RightContainer = styled.div`
  ${flexCenter};
  flex: 1;

  min-width: 0;

  gap: ${clampBuilder(8, 16)};
`;

export const HeaderNav = styled.ul`
  ${flexResponsive(clampBuilder(2, 8))}

  ${media.tablet} {
    flex-direction: row;
  }

  li {
    display: flex;
    align-items: center;
  }

  a {
    ${commonLinkStyles}

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: ${clampBuilder(8, 12)} ${clampBuilder(10, 16)};

    line-height: 1;

    color: var(--light-color);
    font-size: ${clampBuilder(12, 16)};
    transition: var(--transition-thumb);

    &.active {
      color: var(--light-color);
      text-shadow: none;
      ${({ $isHome }) =>
        !$isHome &&
        css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);

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

  margin-left: auto;

  ${media.desktop} {
    flex-direction: row;
  }
`;

export const RegistrationBtn = styled(BaseButtonStyles)`
  ${commonBtnStyles}

  ${({ $isHome }) =>
    $isHome &&
    css`
      ${media.tablet} {
        background-color: var(--accent-color);
        border: 1px solid var(--accent-color);
      }
    `}
`;

export const AuthBtn = styled(BaseButtonStyles)`
  ${commonBtnStyles}
`;

export const UserBlock = styled.div`
  ${flexResponsive(clampBuilder(8, 24))}

  margin-left: auto;

  ${media.desktop} {
    flex-direction: row;
  }
`;

export const UserContainer = styled.div`
  ${flexCenter};
  gap: ${clampBuilder(8, 14)};

  min-width: 0;
  max-width: ${clampBuilder(80, 156)};
  white-space: nowrap;

  font-weight: 500;
  font-size: ${clampBuilder(12, 18)};

  color: var(--light-color);

  cursor: default;
`;

export const UserIcon = styled(Icon)`
  width: ${clampBuilder(12, 24)};
  height: ${clampBuilder(12, 24)};

  color: var(--accent-color);
`;

export const UserIconContainer = styled.div`
  ${flexCenter};
  justify-content: center;
  flex-shrink: 0;

  width: ${clampBuilder(24, 40)};
  height: ${clampBuilder(24, 40)};

  background-color: var(--light-color);
  border-radius: 10px;
`;

export const UserName = styled.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 120px);
`;
