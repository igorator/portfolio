'use client';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/app/src/entities/project/components/ProjectCard';
import { getProjects } from '@/app/src/entities/project/api/getProjects';
import { Project } from '../src/entities/project/types/project';
import { useEffect, useState } from 'react';
import { navigation } from '../shared/data/config/navigation';

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData.data.data);
    };
    fetchProjects();
  }, []);

  return (
    <Section
      className='flex flex-col self-center gap-24 px-md max-w-container'
      id={navigation.projects.id}
    >
      <h1 className='flex text-[70px]'>Projects</h1>
      <div className='flex flex-wrap justify-between gap-[24px]'>
        {projects.map((project: Project) => (
          <ProjectCard
            key={project.documentId}
            title={project.project_title}
            description={project.project_description}
            coverUrl={`${BASE_URL}${project.project_cover.url}`}
            releaseDate={project.project_release_date}
            githubUrl={project.project_github_link}
            deploymentUrl={project.project_deployment_link}
            language={project.language?.short_programing_lang_name}
            frontend_teches={project.frontend_teches}
            backend_teches={project.backend_teches}
          />
        ))}
      </div>
    </Section>
  );
}
