import { useEffect, useState } from 'react';
import { isFavorite, toggleFavorite } from '../../../helpers/favoritesService';
import {
  NannyCardContainer,
  AvatarFigure,
  NannyAvatar,
  StatusBadge,
  WrapperAvatar,
  IconMapPin,
  CardName,
  NannyAddress,
  NannyInfoBar,
  NannyInfoBarContainer,
  NannyInfoGroup,
  IconStar,
  NannyInfoText,
  NannyRating,
  NannyPrice,
  IconLikeEmpty,
  IconFavorite,
  NannyHeaderRight,
  FavoriteButton,
  NannyContentWrapper,
  NannyName,
  NannyExtraInfoGroup,
  NannyAboutWrapper,
  NannyReadMoreBtn,
} from './NannyCard.styled';
import NannyInfoContainer from '../NannyInfoContainer';

function NannyCard({ nanny, isOnline }) {
  const [isNannyFavorite, setIsNannyFavorite] = useState(false);

  useEffect(() => {
    if (nanny?.id) {
      setIsNannyFavorite(isFavorite(nanny.id));
    }
  }, [nanny]);

  function handleFavoriteClick() {
    const status = toggleFavorite(nanny, 'Nanny');
    setIsNannyFavorite(status);
  }

  const {
    avatar_url,
    name,
    location,
    rating,
    price_per_hour,
    id,
    about,
    reviews,
    ...nannyExtraInfo
  } = nanny;

  return (
    <NannyCardContainer>
      <AvatarFigure>
        <WrapperAvatar>
          <NannyAvatar src={avatar_url} alt={name} />
          {isOnline && <StatusBadge />}
        </WrapperAvatar>
      </AvatarFigure>
      <NannyContentWrapper>
        <NannyInfoBar>
          <CardName>Nanny</CardName>
          <NannyHeaderRight>
            <NannyInfoBarContainer>
              <NannyInfoGroup>
                <IconMapPin icon="lucide:map-pin" />
                <NannyAddress>{location}</NannyAddress>
              </NannyInfoGroup>
              <NannyInfoGroup>
                <IconStar icon="ant-design:star-filled" />
                <NannyInfoText>Rating: </NannyInfoText>
                <NannyRating>{rating}</NannyRating>
              </NannyInfoGroup>
              <NannyInfoGroup>
                <NannyInfoText>Price / 1 hour: </NannyInfoText>
                <NannyPrice>{price_per_hour}$</NannyPrice>
              </NannyInfoGroup>
            </NannyInfoBarContainer>
            <FavoriteButton
              type="button"
              onClick={handleFavoriteClick}
              aria-label={
                isNannyFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              {isNannyFavorite ? (
                <IconFavorite icon="boxicons:heart-filled" />
              ) : (
                <IconLikeEmpty icon="boxicons:heart" />
              )}
            </FavoriteButton>
          </NannyHeaderRight>
        </NannyInfoBar>
        <NannyName>{name}</NannyName>
        <NannyExtraInfoGroup>
          <NannyInfoContainer dataObj={nannyExtraInfo} />
        </NannyExtraInfoGroup>
        <NannyAboutWrapper>
          I have a passion for teaching and mentoring children. I aim to help
          them grow and learn in a safe and loving environment. I am also a
          trained child psychologist, which helps me in understanding and
          catering to the unique needs of every child.
        </NannyAboutWrapper>
        <NannyReadMoreBtn>Read more</NannyReadMoreBtn>
      </NannyContentWrapper>
    </NannyCardContainer>
  );
}

export default NannyCard;
