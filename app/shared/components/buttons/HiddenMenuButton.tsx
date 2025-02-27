'use client';

import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HiddenMenu } from '../HiddenMenu';

export const HiddenMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);
  const hasRendered = useRef(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  if (!hasRendered.current) {
    hasRendered.current = true;
  }

  return (
    <>
      <button onClick={toggleMenu}>{isOpen ? 'Close' : 'Menu'}</button>

      {isOpen !== undefined &&
        createPortal(
          <HiddenMenu isOpen={!!isOpen} onClose={() => setIsOpen(false)} />,
          document.body,
        )}
    </>
  );
};
