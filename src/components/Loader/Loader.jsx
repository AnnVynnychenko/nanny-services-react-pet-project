import { LoaderStyles, LoaderWrapper } from './Loader.styled';

function Loader({ fullPage = false, color, size }) {
  return (
    <LoaderWrapper $fullPage={fullPage}>
      <LoaderStyles $color={color} $size={size} />
    </LoaderWrapper>
  );
}

export default Loader;
