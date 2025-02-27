'use client';

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
const ENDPOINT = 'api/projects?populate=*';
const URL = `${BASE_URL}/${ENDPOINT}`;

export const getProjects = async () => {
  const response = await fetch(URL, { method: 'GET' });

  if (!response.ok) {
    return {
      data: [],
      error: `HTTP Error: ${response.status} ${response.statusText}`,
    };
  }

  const projects = await response.json();

  if (!projects || typeof projects !== 'object') {
    return {
      data: [],
      error: 'Invalid JSON response',
    };
  }

  return { data: projects, error: null };
};
