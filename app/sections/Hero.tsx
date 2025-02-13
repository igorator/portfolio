import { Section } from '@/components/Section';
import { TextEncryptedAnimation } from '../shared/animations/TextEncryptedAnimation';

export const Hero = () => (
  <Section className='relative flex flex-col justify-around items-center px-lg py-[160px] max-w-container h-[100dvh]'>
    <TextEncryptedAnimation
      text='Good day!'
      element='h1'
      className='self-start text-[60px]'
      duration={100}
    />

    <TextEncryptedAnimation
      text='I am ih0r'
      element='h1'
      className='self-center text-[80px]'
      duration={200}
      delay={500}
    />

    <TextEncryptedAnimation
      text='web.dev'
      element='h1'
      className='self-end text-[60px]'
      duration={300}
    />

    <div className='absolute bg-grid w-full h-full pointer-events-none radial-mask' />
  </Section>
);
