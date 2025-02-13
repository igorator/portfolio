import { Section } from '@/components/Section';
import { cn } from '../shared/lib/utils/cn';
import Image from 'next/image';

export const Projects = () => {
  return (
    <Section className='flex flex-col self-center px-md max-w-container h-[100vh]'>
      <h1 className='flex text-[70px]'>Projects</h1>

      <div className='grid py-[80px]'>
        <div
          className={cn(
            'flex flex-col max-w-[400px] file-clip bg-[#1a1a1a] p-[24px] gap-[16px]',
          )}
        >
          <h2>Project</h2>
          <p>Description</p>
          <Image
            className='w-full'
            width={250}
            height={300}
            src={'/a'}
            alt={''}
          />
          <div className='flex items-center gap-[24px] w-full between'>
            <a></a>
            <a></a>
            <span className='self-center text-[#5a5a5a] text-end grow'>
              2025
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
