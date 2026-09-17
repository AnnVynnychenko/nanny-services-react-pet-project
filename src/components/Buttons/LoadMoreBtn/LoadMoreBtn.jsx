import { LoadMoreButton } from './LoadMoreBtn.styled';

function LoadMoreBtn({ onClick, ...rest }) {
  return <LoadMoreButton title="Load more" paddingX={40} onClick={onClick} />;
}

export default LoadMoreBtn;
