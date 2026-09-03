import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../helpers/clampBuilder';
import heroImg from '../../assets/images/homeBgImg.jpg';
import { breakpoints } from '../../styles/breakPoints';
import { media } from '../../styles/breakPoints';
import { CommonBtn } from '../Buttons';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

const flexResponsive = gapValue => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gapValue};

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const HeroWrapper = styled.div`
  ${({ $isHome }) =>
    $isHome &&
    css`
      max-width: ${breakpoints.desktopHome};
      margin: 0 auto;
      border-radius: 30px;
      overflow: hidden;

      background-image:
        linear-gradient(
          to right,
          var(--accent-color) 0%,
          var(--accent-color) 49.2%,
          transparent 49.2%
        ),
        url(${heroImg});

      background-position: center right;
      background-size:
        100% 100%,
        auto 736px;
      background-repeat: no-repeat;
    `}
`;

export const Header = styled.header`
  ${flexCenter};
  justify-content: space-between;
  gap: 16px;

  max-width: ${({ $isHome }) =>
    $isHome ? breakpoints.desktopHome : breakpoints.desktop};

  margin-left: auto;
  margin-right: auto;

  padding: ${clampBuilder(12, 20)} ${clampBuilder(12, 96)};

  ${({ $isHome }) =>
    $isHome &&
    css`
      border-radius: 30px 30px 0 0;
      border-bottom: 1px solid var(--white-color);
      overflow: hidden;
    `};

  background-color: ${({ $isHome }) =>
    $isHome ? 'transparent' : 'var(--accent-color)'};

  .logo {
    color: var(--white-color);
    font-weight: 500;
    font-size: ${clampBuilder(14, 24)};
  }
`;

export const RightContainer = styled.div`
  ${flexCenter};
  gap: ${({ $isHome }) =>
    $isHome ? clampBuilder(16, 92) : clampBuilder(16, 217)};
`;

export const HeaderNav = styled.ul`
  ${flexResponsive(clampBuilder(12, 16))}

  li {
    color: var(--white-color);
    font-weight: 400;
    font-size: ${clampBuilder(12, 16)};
  }
`;

export const AuthBlock = styled.div`
  ${flexResponsive('8px')}
`;

export const RegistrationBtn = styled(CommonBtn)`
  ${({ $isHome }) =>
    $isHome
      ? css`
          background-color: var(--accent-color);
          color: var(--white-color);
        `
      : css`
          background-color: var(--white-color);
          color: var(--accent-color);
        `}
`;

export const UserBlock = styled.div`
  ${flexResponsive(clampBuilder(8, 24))}
`;

export const UserName = styled.span`
  ${flexCenter};
  gap: ${clampBuilder(8, 14)};

  color: var(--white-color);
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

  background-color: var(--white-color);
  border-radius: 10px;
`;
