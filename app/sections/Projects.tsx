import { Section } from '@/components/Section';
import { ProjectCard } from '@/app/src/entities/project/components/ProjectCard';
import { getProjects } from '@/app/src/entities/project/api/getProjects';
import { Project } from '../src/entities/project/types/project';

export async function Projects() {
  const projects = await getProjects();

  if (!Array.isArray(projects.data)) {
    console.error('getProjects did not return an array:', projects);
    return <div>Error loading projects</div>;
  }

  console.log(projects.data);

  return (
    <Section className='flex flex-col self-center gap-24 px-md max-w-container'>
      <h1 className='flex text-[70px]'>Projects</h1>
      <div className='flex flex-wrap justify-between gap-[24px]'>
        {projects.data.map((project: Project) => (
          <ProjectCard
            key={project.documentId}
            title={project.project_title}
            description={project.project_description}
            coverUrl={project.project_cover.url}
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
