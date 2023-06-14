import { RefObject, useEffect } from 'react';

const useClickOutside = (
  condition: boolean,
  ref: RefObject<HTMLElement>,
  hide: () => void
) => {
  const handleClickOutside = (e: Event) => {
    if (condition && !ref.current?.contains(e.target as HTMLElement)) {
        hide();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useClickOutside;