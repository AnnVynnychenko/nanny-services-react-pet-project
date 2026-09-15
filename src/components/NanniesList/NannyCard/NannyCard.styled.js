import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';
import { clampBuilder } from '../../../helpers/clampBuilder';

const commonTextStyle = css`
  font-size: ${clampBuilder(8, 16)};
  font-weight: 500;
  line-height: 1.5;
  color: var(--dark-text-color);
`;

export const NannyCardContainer = styled.li`
  display: flex;
  gap: ${clampBuilder(8, 24)};
  max-width: ${clampBuilder(264, 1184)};
  padding: ${clampBuilder(8, 24)};
  border-radius: ${clampBuilder(8, 24)};
  background-color: var(--light-color);
`;

export const AvatarFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${clampBuilder(28, 120)};
  height: ${clampBuilder(28, 120)};
  margin: 0;
  padding: ${clampBuilder(3, 12)};
  border: 2px solid var(--accent-transparent);
  border-radius: ${clampBuilder(8, 30)};
`;

export const WrapperAvatar = styled.div`
  position: relative;
  width: ${clampBuilder(20, 96)};
  height: ${clampBuilder(20, 96)};
`;

export const NannyAvatar = styled.img`
  width: ${clampBuilder(20, 96)};
  height: ${clampBuilder(20, 96)};
  border-radius: ${clampBuilder(4, 15)};
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: -2px;
  right: 2px;
  box-sizing: content-box;
  width: ${clampBuilder(4, 9)};
  height: ${clampBuilder(4, 9)};
  border-radius: 50%;
  background-color: var(--online-round-color);
  border: ${clampBuilder(1, 2)} solid var(--light-color);
`;

export const NannyInfoBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const CardName = styled.h2`
  ${commonTextStyle}
  color: var(--grey-text-color);
`;

export const NannyInfoBarContainer = styled.div`
  display: flex;
  gap: ${clampBuilder(4, 16)};
  align-items: center;
`;

export const NannyContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NannyInfoGroup = styled.div`
  display: flex;
  gap: ${clampBuilder(4, 8)};
  align-items: center;
  position: relative;

  &:not(:last-child) {
    padding-right: ${clampBuilder(8, 16)};

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0.5px;
      height: ${clampBuilder(8, 16)};
      background-color: var(--grey-border-color);
    }
  }
`;

export const IconMapPin = styled(Icon)`
  width: ${clampBuilder(8, 16)};
  height: ${clampBuilder(8, 16)};
  color: var(--dark-text-color);
`;

export const NannyAddress = styled.address`
  ${commonTextStyle}
`;

export const NannyInfoText = styled.div`
  ${commonTextStyle}
`;

export const NannyRating = styled.div`
  ${commonTextStyle}
`;

export const NannyPrice = styled.div`
  ${commonTextStyle}
  color: var(--online-round-color);
`;

export const FavoriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${clampBuilder(18, 26)};
  height: ${clampBuilder(18, 26)};
  line-height: 0;
  transition: var(--transition-thumb);

  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconFavorite = styled(Icon)`
  width: ${clampBuilder(18, 26)};
  height: ${clampBuilder(18, 26)};
  color: var(--accent-color);
  outline: none;
`;

export const IconLikeEmpty = styled(Icon)`
  width: ${clampBuilder(18, 26)};
  height: ${clampBuilder(18, 26)};
  outline: none;
`;

export const NannyHeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: ${clampBuilder(16, 48)};
`;

export const NannyName = styled.div`
  margin-bottom: ${clampBuilder(12, 24)};
  font-size: ${clampBuilder(12, 24)};
  font-weight: 500;
  line-height: 1.5;
  color: var(--dark-text-color);
`;

export const NannyExtraInfoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  gap: ${clampBuilder(4, 8)};
  margin-bottom: ${clampBuilder(8, 24)};
`;

export const NannyAboutWrapper = styled.p`
  ${({ $showDetails }) =>
    $showDetails
      ? css`
          padding-bottom: ${clampBuilder(8, 24)};
        `
      : css`
          margin-bottom: ${clampBuilder(8, 14)};
        `}

  font-size: ${clampBuilder(8, 16)};
  font-weight: 400;
  line-height: 1.25;
  color: var(--grey-text-color-transp);
`;

export const NannyReadMoreBtn = styled.button`
  align-self: flex-start;
  text-align: left;
  ${commonTextStyle}
  text-decoration: underline;
  outline: none;
  transition:
    color var(--transition-thumb),
    text-decoration var(--transition-thumb),
    transform var(--transition-thumb);

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    text-decoration: none;
  }

  &:active {
    opacity: 0.8;
  }
`;
