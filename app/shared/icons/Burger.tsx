'use client';

import { useState } from 'react';
import Hamburger from 'hamburger-react';

export const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />;
};
