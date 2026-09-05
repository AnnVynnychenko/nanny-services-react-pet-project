import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const NannyCardContainer = styled.li`
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
  border: 2px solid var(--accent-transparent);
  border-radius: ${clampBuilder(8, 30)};
`;

export const WrapperAvatar = styled.div`
  position: relative;
  width: ${clampBuilder(24, 96)};
  height: ${clampBuilder(24, 96)};
`;

export const NannyAvatar = styled.img`
  width: ${clampBuilder(24, 96)};
  height: ${clampBuilder(24, 96)};
  border-radius: ${clampBuilder(8, 15)};
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
  border: 2px solid var(--light-color);
`;
