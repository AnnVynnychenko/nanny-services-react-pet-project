import { Backdrop } from './ModalBackdrop.styled';

function ModalBackdrop({ children, onClose }) {
  function handleBackdropClick(evt) {
    const { target, currentTarget } = evt;
    if (target === currentTarget) {
      onClose?.();
    }
  }

  return <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>;
}

export default ModalBackdrop;
