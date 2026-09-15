import { useCallback, useState } from 'react';
import { getReviewerInitial } from '../../../helpers/getReviewerInitial';

import IconStar from '../IconStar';
import {
  NannyReviewsContainer,
  NannyReview,
  ReviewAuthor,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewRating,
  ReviewHeader,
  ReviewComment,
  AppointmentBtn,
} from './NannyReviews.styled';
import ModalMakeAnAppointment from '../../ModalMakeAnAppointment';

function NannyReviews({ nanny }) {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const toggleAppointmentModal = useCallback(() => {
    setShowAppointmentModal(state => !state);
  }, []);

  const { reviews } = nanny;
  return (
    <NannyReviewsContainer>
      {reviews.map(({ reviewer, rating, comment }, index) => (
        <NannyReview key={`${reviewer}-${index}`}>
          <ReviewAuthor>
            <ReviewAuthorAvatar>
              {getReviewerInitial(reviewer)}
            </ReviewAuthorAvatar>
            <ReviewHeader>
              <ReviewAuthorName>{reviewer}</ReviewAuthorName>
              <ReviewRating>
                <IconStar />
                {Number(rating).toFixed(1)}
              </ReviewRating>
            </ReviewHeader>
          </ReviewAuthor>
          <ReviewComment>{comment}</ReviewComment>
        </NannyReview>
      ))}
      <AppointmentBtn
        title="Make an appointment"
        paddingX={28}
        onClick={toggleAppointmentModal}
      />
      {showAppointmentModal && (
        <ModalMakeAnAppointment
          onClose={toggleAppointmentModal}
          nanny={nanny}
        />
      )}
    </NannyReviewsContainer>
  );
}

export default NannyReviews;
