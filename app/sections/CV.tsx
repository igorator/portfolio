import { Section } from '@/components/Section';
import { ASCII_CV } from '@/data/ASCII_art';

export const CV = () => (
  <Section className='flex justify-center items-center py-[180px] h-[100vh]'>
    <a href='' className='flex flex-col gap-2'>
      <div className='overflow-wrap-break-word text-[6px] break-words leading-[150%] whitespace-pre-wrap'>
        {ASCII_CV}
      </div>
      <span>Download</span>
    </a>
  </Section>
);
