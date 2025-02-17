const BASE_URL = process.env.STRAPI_BASE_URL;
const ENDPOINT = 'api/projects?populate=*';
const URL = `${BASE_URL}/${ENDPOINT}`;

console.log(URL);

export const getProjects = async () => {
  const data = await fetch(URL);
  const projects = await data.json();
  return projects;
};
