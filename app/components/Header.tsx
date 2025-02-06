import { Logo } from '@/components/Logo';
import { BurgerIcon } from '../shared/icons/Burger';

export const Header = ({ ...props }: React.HTMLProps<HTMLElement>) => {
  return (
    <header
      {...props}
      className='fixed flex justify-between items-center px-[48px] py-[24px] pr-[36px] w-full max-w-[1440px]'
    >
      <Logo />

      <BurgerIcon />
    </header>
  );
};
