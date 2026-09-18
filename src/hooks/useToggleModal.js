import { useCallback, useState } from 'react';

export const useToggleModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = useCallback(() => {
    setIsOpen(state => !state);
  }, []);
  return { isOpen, toggleModal };
};
