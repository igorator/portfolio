import { Technology } from './technologies';

type Project = {
  id: string;
  title: string;
  description: string;
  cover: string;
  links: {
    github_link?: string;
    deployment_link?: string;
  };
  technologies: {
    front_end?: Technology[];
    back_end?: Technology[];
  };
  year_released?: number;
};

export const projects: Project[] = [
  {
    id: '1',
    title: '',
    description: '',
    cover: '',
    links: {
      github_link: '',
      deployment_link: '',
    },
    technologies: {
      front_end: [],
      back_end: [],
    },
  },
];
