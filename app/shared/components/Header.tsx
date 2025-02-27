import { Logo } from '@/components/Logo';

import { HiddenMenuButton } from './buttons/HiddenMenuButton';

export const Header = ({ ...props }: React.HTMLProps<HTMLElement>) => {
  return (
    <header
      {...props}
      className='top-0 z-10 fixed flex justify-between items-center px-md py-md w-full max-w-container'
    >
      <Logo />

      <HiddenMenuButton />
    </header>
  );
};
