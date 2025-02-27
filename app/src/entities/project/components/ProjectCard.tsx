import Image from 'next/image';
import { cn } from '@/app/shared/lib/utils/cn';

interface ProjectCardProps {
  title: string;
  description: string;
  coverUrl: string;
  releaseDate: string;
  githubUrl?: string;
  deploymentUrl?: string;
  language?: string;
  backend_teches?: {
    tech_name: string;
  }[];
  frontend_teches?: {
    tech_name: string;
  }[];
}

export const ProjectCard = ({
  title,
  description,
  coverUrl,
  releaseDate,
  githubUrl,
  deploymentUrl,
  language,
  backend_teches = [],
  frontend_teches = [],
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col max-w-[400px] bg-[#1a1a1a] p-[24px] gap-[16px] rounded-lg shadow-lg file-clip flex-grow justify-between',
      )}
    >
      <h2 className='font-bold text-xl'>{title}</h2>

      <Image
        className='rounded-md w-full max-h-[200px] object-cover mix-blend-difference'
        width={250}
        height={200}
        src={coverUrl}
        alt={title}
      />
      <p className='text-gray-400'>{description}</p>
      <div className='flex flex-col flex-wrap gap-2 text-gray-300 text-sm'>
        {language && (
          <span className='bg-white px-2 py-1 rounded-md text-black'>
            Base: {language}
          </span>
        )}
        {frontend_teches.length > 0 && (
          <span className='bg-white px-2 py-1 rounded-md text-black'>
            Frontend: {frontend_teches.map((tech) => tech.tech_name).join(', ')}
          </span>
        )}
        {backend_teches.length > 0 && (
          <span className='bg-white px-2 py-1 rounded-md text-black'>
            Backend: {backend_teches.map((tech) => tech.tech_name).join(', ')}
          </span>
        )}
      </div>

      <div className='flex justify-between items-center gap-4 w-full'>
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            GitHub
          </a>
        )}
        {deploymentUrl && (
          <a
            href={deploymentUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Live Demo
          </a>
        )}
        <span className='self-center text-[#5a5a5a] text-end grow'>
          {new Date(releaseDate).getFullYear()}
        </span>
      </div>
    </div>
  );
};
