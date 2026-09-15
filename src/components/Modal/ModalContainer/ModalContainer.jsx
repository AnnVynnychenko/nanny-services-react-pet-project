import {
  ModalWrapper,
  ModalTitle,
  ModalExplanation,
  ModalCloseBtn,
} from './ModalContainer.styled';

function ModalContainer({ title, explanation, children, className, onClose }) {
  function handleModalCloseClick() {
    onClose?.();
  }

  return (
    <ModalWrapper className={className}>
      <ModalCloseBtn icon="ci:close-md" onClick={handleModalCloseClick} />
      <ModalTitle>{title}</ModalTitle>
      <ModalExplanation>{explanation}</ModalExplanation>
      {children}
    </ModalWrapper>
  );
}

export default ModalContainer;
