import Image from 'next/image';
import { cn } from '@/app/shared/lib/utils/cn';

const BASE_URL = process.env.STRAPI_BASE_URL;

interface ProjectCardProps {
  title: string;
  description: string;
  coverUrl: string;
  releaseDate: string;
  githubUrl?: string;
  deploymentUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  coverUrl,
  releaseDate,
  githubUrl,
  deploymentUrl,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col max-w-[400px] bg-[#1a1a1a] p-[24px] gap-[24px] file-clip',
      )}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <Image
        className='w-full mix-blend-difference'
        width={250}
        height={300}
        src={`${BASE_URL}${coverUrl}`}
        alt={title}
      />
      <div className='flex justify-between items-center gap-[24px] w-full'>
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 underline'
          >
            GitHub
          </a>
        )}
        {deploymentUrl && (
          <a
            href={deploymentUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 underline'
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
