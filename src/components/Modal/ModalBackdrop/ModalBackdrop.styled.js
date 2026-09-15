import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: var(--modal-backdrop);
  display: flex;
  justify-content: center;
  pointer-events: auto;
  overflow-y: auto;
`;
