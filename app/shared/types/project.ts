import { Technology } from './technology';

export type Project = {
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
