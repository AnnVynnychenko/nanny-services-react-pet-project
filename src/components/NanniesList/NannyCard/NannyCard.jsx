import {
  NannyCardContainer,
  AvatarFigure,
  NannyAvatar,
  StatusBadge,
  WrapperAvatar,
} from './NannyCard.styled';

function NannyCard({ nanny }) {
  const isOnline = true;
  const { avatar_url, name } = nanny || {};
  return (
    <NannyCardContainer>
      <AvatarFigure>
        <WrapperAvatar>
          {' '}
          <NannyAvatar src={avatar_url} alt={name} />
          {isOnline && <StatusBadge />}
        </WrapperAvatar>
      </AvatarFigure>
      <div></div>
    </NannyCardContainer>
  );
}

export default NannyCard;
