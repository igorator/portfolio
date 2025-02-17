export type Project = {
  documentId: string;
  project_title: string;
  project_description: string;
  project_cover: {
    url: string;
  };
  project_release_date: string;
  project_github_link?: string;
  project_deployment_link?: string;
};
