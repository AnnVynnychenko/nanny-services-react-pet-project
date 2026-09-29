import { LoadMoreButton } from './LoadMoreBtn.styled';

function LoadMoreBtn({ onClick, ...restProps }) {
  return (
    <LoadMoreButton
      type="button"
      $paddingX={38}
      $paddingY={14}
      onClick={onClick}
      {...restProps}
    >
      Load more
    </LoadMoreButton>
  );
}

export default LoadMoreBtn;
