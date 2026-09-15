import { useEffect } from 'react';

export const useEscapeClose = onClose => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape' && onClose) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
};
