import styled from 'styled-components';
import { CircleLoader } from 'react-spinners';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${({ $fullPage }) =>
    $fullPage ? 'calc(100vh - 200px)' : '300px'};
`;

export const LoaderStyles = styled(CircleLoader).attrs(({ $color, $size }) => ({
  color: $color || 'var(--accent-color)',
  size: $size || 60,
}))``;
