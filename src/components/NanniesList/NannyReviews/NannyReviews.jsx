import { getReviewerInitial } from '../../../helpers/getReviewerInitial';
import { IconStar } from '../IconStar/IconStar.styled';
import {
  NannyReviewsContainer,
  NannyReview,
  ReviewAuthor,
  ReviewAuthorAvatar,
  ReviewAuthorName,
  ReviewRating,
  ReviewHeader,
  ReviewComment,
  MakeAnAppointmentBtn,
} from './NannyReviews.styled';
import ModalMakeAnAppointment from '../../Modal/ModalMakeAnAppointment';
import { useToggleModal } from '../../../hooks/useToggleModal';

function NannyReviews({ nanny }) {
  const { isOpen: showAppointmentModal, toggleModal: toggleAppointmentModal } =
    useToggleModal(false);

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
      <MakeAnAppointmentBtn
        type="button"
        $paddingX={25}
        $paddingY={12}
        onClick={toggleAppointmentModal}
      >
        Make an appointment
      </MakeAnAppointmentBtn>
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
