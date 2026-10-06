import { useState } from 'react';

export const useToggleModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => {
    setIsOpen(state => !state);
  };
  return { isOpen, toggleModal };
};
