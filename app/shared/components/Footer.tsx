import { socials } from '@/data/config/socials';
import { MailIcon } from '@/icons/Mail';

export const Footer = ({ ...props }: React.HTMLProps<HTMLElement>) => {
  return (
    <footer
      {...props}
      className='bottom-0 z-10 fixed flex justify-between px-md py-md w-full max-w-container'
    >
      <div className='flex justify-center items-center gap-[24px]'>
        <a
          href='mailto:ihor.kliushnyk@gmail.com'
          className='group flex items-center gap-[16px]'
        >
          <MailIcon className='group-hover:icon-hover w-8 h-8 transition-all' />
          ihor.kliushnyk@gmail.com
        </a>
      </div>

      <div className='flex justify-center items-center gap-[24px]'>
        {socials.map((social) => (
          <a
            key={social.title}
            href={social.url}
            target='_blank'
            className={`w-8 h-8 hover:icon-hover transition-all flex items-center justify-center`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
