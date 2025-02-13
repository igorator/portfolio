import Link from 'next/link';
import { routes } from '@/data/config/routes';

export const Logo = () => {
  return (
    <Link
      href={routes.root}
      className='flex justify-center items-center bg-white rounded-[6px] w-[40px] h-[40px] text-black transition-all hover:icon-hover'
    >
      i
    </Link>
  );
};
