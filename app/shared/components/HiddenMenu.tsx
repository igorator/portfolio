'use client';

import { navigation } from '../data/config/navigation';
import { cn } from '../lib/utils/cn';

const transitionStyles = {
  open: 'opacity-100 pointer-events-auto',
  closed: 'opacity-0 pointer-events-none',
};

export const HiddenMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={cn(
        'fixed z-49 flex justify-end transition-opacity duration-300 max-w-container w-full justify-self-center top-[75px] text-black',
        isOpen ? transitionStyles.open : transitionStyles.closed,
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'bg-white shadow-lg p-4 w-64 h-full transition-transform duration-300',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col'>
          {Object.values(navigation).map((navItem) => (
            <a href={'#' + navItem.id} key={navItem.id} onClick={onClose}>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
