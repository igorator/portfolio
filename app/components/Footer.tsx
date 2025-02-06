import { Logo } from '@/components/Logo';
import { socials } from '../shared/data/socials';

export const Footer = ({ ...props }: React.HTMLProps<HTMLElement>) => {
  return (
    <footer
      {...props}
      className='flex justify-between items-center px-[48px] py-[24px] w-full max-w-[1440px]'
    >
      <Logo />
      <div className='flex justify-center items-center gap-[24px]'>
        {socials.map((social) => (
          <a key={social.title} href={social.url} target='_blank'>
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
