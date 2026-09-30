import React, { useId } from 'react';
import {
  ModalWrapper,
  ModalTitle,
  ModalExplanation,
  ModalCloseBtn,
  IconCloseModal,
} from './ModalContainer.styled';

function ModalContainer({ title, explanation, children, className, onClose }) {
  const titleId = useId();

  return (
    <ModalWrapper
      className={className}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <ModalCloseBtn type="button" onClick={onClose} aria-label="Close modal">
        <IconCloseModal icon="ci:close-md" />
      </ModalCloseBtn>
      {title && <ModalTitle id={titleId}>{title}</ModalTitle>}
      {explanation && <ModalExplanation>{explanation}</ModalExplanation>}
      {children}
    </ModalWrapper>
  );
}

export default ModalContainer;
