import styled from 'styled-components';
import { clampBuilder } from '../../../helpers/clampBuilder';
import { CommonBtn } from '../../Buttons/Buttons';

export const NannyReviewsContainer = styled.div`
  max-width: ${clampBuilder(264, 1184)};
  padding: ${clampBuilder(8, 24)};
  border-radius: ${clampBuilder(8, 24)};
  background-color: var(--light-color);
`;

export const NannyReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${clampBuilder(8, 16)};
  margin-bottom: ${clampBuilder(12, 25)};

  &:last-of-type {
    margin-bottom: ${clampBuilder(12, 48)};
  }
`;

export const ReviewAuthor = styled.div`
  display: flex;
  gap: ${clampBuilder(4, 12)};
`;

export const ReviewHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewAuthorAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${clampBuilder(26, 44)};
  height: ${clampBuilder(26, 44)};
  font-size: ${clampBuilder(16, 20)};
  font-weight: 500;
  line-height: 1;
  color: var(--accent-color);
  border-radius: 50%;
  background-color: var(--accent-transparent);
`;

export const ReviewAuthorName = styled.span`
  font-size: ${clampBuilder(10, 16)};
  font-weight: 500;
  line-height: 1.25;
  color: var(--dark-text-color);
`;

export const ReviewRating = styled.div`
  display: flex;
  gap: ${clampBuilder(4, 8)};
  font-size: ${clampBuilder(8, 14)};
  font-weight: 500;
  line-height: 1.2;
  color: var(--dark-text-color);
`;

export const ReviewComment = styled.p`
  font-size: ${clampBuilder(10, 16)};
  font-weight: 400;
  line-height: 1.25;
  color: var(--grey-text-color-transp);
`;

export const AppointmentBtn = styled(CommonBtn)`
  border: 1px solid transparent;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--white-color);
    border-color: var(--accent-color);
  }
`;
